import React from 'react';

const ImageWithFallback = ({ src, alt, ...props }) => {
  const handleImageError = (e) => {
    // Select a random fallback image
    e.target.src = `https://random.imagecdn.app/512/512?${Date.now()}`;
  };

  return (
    <img
      src={src}
      alt={alt}
      onError={handleImageError}
      {...props}
    />
  );
};

export default ImageWithFallback;
