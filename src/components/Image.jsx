import React from "react";

const Image = (props) => {
  const { imageURL, height } = props;
  return (
    <div
      style={{
        width: "90%",
        height: `${height}px`,
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Image;
