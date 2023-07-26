import React, { FC } from "react";

const ImageAsset: React.FC<{node: any}> = ({ src, description }) => {
  return (
    <>
      {src && (
        <img
          loading="lazy"
          src={`${src}?w=1920&h=960`}
          srcSet={`${src}?w=3840&h=1920 1920w, ${src}?w=1920&h=960 1280w, ${src}?w=1280&h=640 640w`}
          alt={description ?? ""}
        />
      )}
    </>
  );
};

export default ImageAsset;
