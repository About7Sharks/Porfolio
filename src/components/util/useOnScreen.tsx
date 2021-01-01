import { useState, useEffect } from "react";
// Hook
export const useOnScreen = (ref: any, offset: string) => {
  console.log("Ref screen change");
  let rootMargin = offset;
  // State and setter for storing whether element is visible
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    if (ref.current === undefined) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update our state when observer callback fires

        setIntersecting(entry.isIntersecting);
      },
      { rootMargin }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.unobserve(ref.current);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return isIntersecting;
};
