import React from "react";
import "../myscss.scss";
import { HomeLanding } from "./HomeLanding";
import { SlidingAnimationWithScroll } from "./SlidingAnimationWithScroll";
import { ProjectHome } from "./ProjectHome";
import { JournalHome } from "./JournalHome";
export default function Home() {
  return (
    <div>
      <HomeLanding />
      <SlidingAnimationWithScroll
        text={[
          "Enjoy the little things in life for one day you'll look back and realize they were the big things",
          "For every thousand hacking at the leaves of evil, there is one striking at the root.",
          "They say the mind is stronger than the body, but the heart is stronger than the mind",
          "The meaning of life is to find your gift, the purpose of life is to give it away -Pablo Picasso",
          "A foul ball can still be a catch",
        ]}
      />
      <ProjectHome />
      <JournalHome />
    </div>
  );
}
