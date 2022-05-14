import React, { useEffect, useState } from "react";
import { useViewportScroll } from "framer-motion";
interface Props { }

export const ViewportProgress = (props: Props) => {
  const { scrollYProgress } = useViewportScroll();
  let [scrollY, setScrollY] = useState(0);
  useEffect(
    () =>
      scrollYProgress.onChange((latest) => {
        setScrollY(latest * 100);
      }),
    [scrollYProgress]
  );
  return (
    <svg
      style={{ position: "fixed", top: 0, left: 0, zIndex: 101 }}
      viewBox="0 0 100 1"
    >
      <line
        x2={scrollY}
        style={{
          stroke: "grey",
          strokeWidth: ".3",
        }}
      />
    </svg>
  );
};
