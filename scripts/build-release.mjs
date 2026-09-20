import { execFileSync, spawnSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

export function releaseRevision(cwd, commitRef) {
  const git = (...args) => execFileSync('git', args, { cwd, encoding: 'utf8' }).trim();
  const revision = git('rev-parse', 'HEAD');
  if (!/^[a-f0-9]{40}$/.test(revision)) throw new Error('Release requires a full Git revision');
  if (git('status', '--porcelain', '--untracked-files=normal')) throw new Error('Release requires a clean worktree');
  if (commitRef && commitRef !== revision) throw new Error('Provider commit does not match checked-out source');
  return revision;
}

export function stampRelease(output, revision, builtAt = new Date().toISOString()) {
  if (!/^[a-f0-9]{40}$/.test(revision) || !/^\d{4}-\d{2}-\d{2}T.*Z$/.test(builtAt) || !Number.isFinite(Date.parse(builtAt))) throw new Error('Invalid release metadata');
  // A successful build must exist; never stamp an empty or old source folder.
  readFileSync(resolve(output, 'index.html'));
  const headers = readFileSync(resolve(output, '_headers'), 'utf8');
  const metadata = { schema: 'deployment.v1', revision, built_at: builtAt };
  writeFileSync(resolve(output, 'deployment.json'), JSON.stringify(metadata, null, 2) + '\n');
  writeFileSync(resolve(output, '_headers'), headers + `\n# Generated for this build only\n/*\n  X-Deployment-Revision: ${revision}\n  X-Deployment-Built-At: ${builtAt}\n\n/deployment.json\n  Cache-Control: no-store\n`);
  writeFileSync(resolve(output, 'deployment-headers.conf'), `# Generated for this build only\nadd_header X-Deployment-Revision "${revision}" always;\nadd_header X-Deployment-Built-At "${builtAt}" always;\n`);
  return metadata;
}

export function buildRelease(cwd = process.cwd(), staging = false) {
  const revision = releaseRevision(cwd, process.env.COMMIT_REF);
  const env = { ...process.env };
  if (staging) env.PUBLIC_URL = '/app/zacarlin';
  const run = args => {
    const result = spawnSync(process.execPath, args, { cwd, env, stdio: 'inherit' });
    if (result.error || result.status !== 0) throw new Error(`Build step failed: ${args[0]}`);
  };
  run(['scripts/apply-patches.mjs']);
  run(['node_modules/react-scripts/bin/react-scripts.js', 'build']);
  if (releaseRevision(cwd, process.env.COMMIT_REF) !== revision) throw new Error('Source changed during build; artifact not stamped');
  const metadata = stampRelease(resolve(cwd, env.BUILD_PATH || 'build'), revision);
  console.log(`Release ${metadata.revision} built ${metadata.built_at}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try { buildRelease(process.cwd(), process.argv.includes('--staging')); }
  catch (error) { console.error(error.message); process.exitCode = 1; }
}
