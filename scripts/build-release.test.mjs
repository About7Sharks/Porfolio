import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { releaseRevision, stampRelease } from './build-release.mjs';

test('metadata keeps existing headers and binds nginx/Netlify to one build', () => {
  const dir=mkdtempSync(join(tmpdir(),'release-test-'));
  try {
    writeFileSync(join(dir,'index.html'),'<main>fixture</main>');
    writeFileSync(join(dir,'_headers'),'/*\n  X-Content-Type-Options: nosniff\n');
    const metadata=stampRelease(dir,'a'.repeat(40),'2026-09-20T00:00:00.000Z');
    assert.deepEqual(JSON.parse(readFileSync(join(dir,'deployment.json'))),metadata);
    for(const file of ['_headers','deployment-headers.conf']) {
      const body=readFileSync(join(dir,file),'utf8');assert.ok(body.includes(metadata.revision));assert.ok(body.includes(metadata.built_at));
    }
    assert.ok(readFileSync(join(dir,'_headers'),'utf8').startsWith('/*\n  X-Content-Type-Options: nosniff\n'));
    assert.throws(()=>stampRelease(dir,'main'),/Invalid/);
    assert.throws(()=>stampRelease(dir,'a'.repeat(40),'not a date'),/Invalid/);
  } finally {rmSync(dir,{recursive:true,force:true});}
});

test('only clean source with a matching provider commit is releasable', () => {
  const dir=mkdtempSync(join(tmpdir(),'release-git-'));
  const git=(...args)=>execFileSync('git',args,{cwd:dir,encoding:'utf8'}).trim();
  try {
    git('init','-q');git('config','user.email','fixture@example.invalid');git('config','user.name','Fixture');
    writeFileSync(join(dir,'source'),'one');git('add','source');git('commit','-qm','fixture');
    const sha=git('rev-parse','HEAD');assert.equal(releaseRevision(dir,sha),sha);
    assert.throws(()=>releaseRevision(dir,'b'.repeat(40)),/does not match/);
    writeFileSync(join(dir,'source'),'two');assert.throws(()=>releaseRevision(dir),/clean/);
    writeFileSync(join(dir,'source'),'one');writeFileSync(join(dir,'untracked-source'),'extra');assert.throws(()=>releaseRevision(dir),/clean/);
  } finally {rmSync(dir,{recursive:true,force:true});}
});
