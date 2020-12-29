import React, { useEffect, useRef } from "react";
import VisibilitySensor from "react-visibility-sensor";

//this component expects an array of string which it will render in vertical columns
// these columns transform along the x axis when the user scrolls
type slideProps = {
  text: string[];
};
const SlidingAnimationWithScroll = ({ text }: slideProps) => {
  let listStyle = {
    padding: 100,
  };

  //when visible run this function
  const onChange = (e: boolean) => {
    if (e == false) return;
    console.log(e);
    console.log("visibile bitch");
    // document.getElementById("list")?.classList.add("fadeIn");
  };
  let items = text.map((item, i) => {
    return (
      <li
        style={{
          ...listStyle,
          color: "red",
          margin: `${Math.random() * 10}px`,
        }}
        key={i}
      >
        {item}
      </li>
    );
  });
  const listRef = useRef(null);

  let listRenderLocation =
    document.getElementById("list")?.getClientRects() || 550;
  const scrollAnimation = () => {
    console.log(listRenderLocation, window.scrollY);
    console.log(window.scrollY - (listRenderLocation as number));
    if (window.scrollY > (listRenderLocation as number)) {
      console.log("coool");
    }

    // let offset = 100 - window.scrollY - 600 / 3;
    // offset < 0 ? (offset = 0) : console.log("");
    // console.log(
    //   Array.prototype.slice.call(
    //     document.getElementsByClassName("slideList")[0].children
    //   )
    // );
    Array.prototype.slice
      .call(document.getElementsByClassName("slideList")[0].children)
      .map((item) => {
        item.setAttribute(
          "style",
          `transform: translateX(${window.scrollY}px)`
          // ...listStyle
        );
      });
  };
  useEffect(() => {
    console.log(document.getElementById("list")?.getClientRects());
    document.addEventListener("scroll", scrollAnimation);
    return () => {
      document.removeEventListener("scroll", scrollAnimation);
    };
  }, []);

  return (
    <VisibilitySensor
      onChange={(e) => {
        onChange(e);
      }}
    >
      <ul id="list" ref={listRef} className="slideList">
        {items}
      </ul>
    </VisibilitySensor>
  );
};

export default SlidingAnimationWithScroll;
