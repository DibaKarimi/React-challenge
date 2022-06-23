import React from "react";

const Image = (props) => {
  const { imageURL } = props;
  // console.log(episodeInfo?.image?.original);

  return (
    <div
      style={{
        width: "90%",
        height: "600px",
        backgroundImage: `url(${imageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Image;
