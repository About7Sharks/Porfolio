import { HomeLanding } from "./HomeLanding";
import { ProjectHome } from "./ProjectHome";
import { JournalHome } from "./JournalHome";

export default function Home() {
  return (
    <div className="Home">
      <HomeLanding />
      <ProjectHome />
      <JournalHome />
    </div>
  );
}
