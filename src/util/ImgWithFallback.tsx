import { useState } from "react";

const ImageWithFallback = ({ src, alt, ...props }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const handleImageError = () => {
    setImageSrc(`https://picsum.photos/400/300?grayscale${Math.random()}`);
  };
  return (
    <img
      key={imageSrc}
      loading="lazy"
      src={imageSrc}
      alt={alt}
      onError={handleImageError}
      {...props}
    />
  );
};

export default ImageWithFallback;
