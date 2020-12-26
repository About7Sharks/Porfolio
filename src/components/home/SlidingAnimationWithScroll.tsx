import React from "react";
type slideProps = {
  text: string[];
};
const SlidingAnimationWithScroll = ({ text }: slideProps) => {
  console.log(text);
  return <div>{text}</div>;
};

export default SlidingAnimationWithScroll;
