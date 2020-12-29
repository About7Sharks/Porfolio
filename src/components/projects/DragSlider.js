import React from "react";
import { useSpring, animated, config } from "react-spring";
import { useDrag } from "react-use-gesture";
import sites from "./sites";
// import { IMAGES } from "./Images.js";
let IMAGES = sites.map((site) => {
  return {
    title: site.title,
    image: site.img,
    description: site.text,
    url: site.url,
    tags: site.tags,
  };
});
const ImageGallery = () => {
  const [{ x }, set] = useSpring(() => ({ x: 0, config: config.stiff }));

  const containerRef = React.useRef(null);
  const imagesRef = React.useRef(null);

  const [containerWidth, setContainerWidth] = React.useState(0);
  const [imagesWidth, setImagesWidth] = React.useState(0);

  const TOTAL_PADDING = 20 * IMAGES.length;

  React.useEffect(() => {
    const measureContainerWidth = () => {
      setContainerWidth(containerRef.current.clientWidth);
    };

    const measureImagesWidth = () => {
      const imagesNode = imagesRef.current.childNodes;
      const imagesArr = Array.from(imagesNode);
      const imagesSumWidth = imagesArr.reduce(
        (acc, node) => acc + node.clientWidth,
        0
      );
      setImagesWidth(imagesSumWidth);
    };

    measureContainerWidth();
    measureImagesWidth();
    window.addEventListener("resize", measureContainerWidth);
    window.addEventListener("resize", measureImagesWidth);
  }, [containerWidth]);

  const bind = useDrag(
    (state) => {
      const { offset } = state;
      const xOffset = offset[0];

      set({ x: xOffset });
    },
    {
      axis: "x",
      bounds: {
        left: -(imagesWidth - containerWidth + TOTAL_PADDING),
        right: 0,
      },
      rubberband: true,
    }
  );
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <main ref={containerRef} {...bind()} className="container">
      <animated.div
        ref={imagesRef}
        style={{ transform: x.interpolate((x) => `translate3d(${x}px, 0,0)`) }}
        className="images"
      >
        {IMAGES.map((image) => (
          <img
            onClick={(e) => {
              handleClick(e);
            }}
            key={image.id}
            src={image.image}
            alt="Human portrait"
          />
        ))}
      </animated.div>
    </main>
  );
};

export default ImageGallery;
