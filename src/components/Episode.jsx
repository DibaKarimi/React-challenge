import React from "react";
import Image from "./Image";
import "bootstrap/dist/css/bootstrap.css";

const Episode = (props) => {
  const { name, image, language, country, rating } = props;
  console.log(rating);
  return (
    <div className=" d-flex flex-column">
      <h1 className="pt-5 d-flex align-items-center justify-content-center">
        {name}
      </h1>
      <div className="p-3 d-flex align-items-center justify-content-center">
        <Image imageURL={image} />
      </div>
      <div className="pt-3 m-3 d-flex flex-column align-items-center justify-content-center">
        <div className="pt-1 m-1">Language: {language}</div>
        <div className="pt-1 m-1">Country: {country}</div>
        <div className="p-1 m-1">Rating: {rating}</div>
      </div>
    </div>
  );
};

export default Episode;
