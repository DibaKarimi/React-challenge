import React from "react";
import Image from "./Image";
import Title from "./Title";
import Description from "./Description";
import "bootstrap/dist/css/bootstrap.css";

const Episode = (props) => {
  const { name, image, language, country, rating } = props;
  console.log(rating);
  return (
    <div className="card">
      <Title title={name} />
      <Image imageURL={image} height="500" />
      <Description language={language} country={country} rating={rating} />
    </div>
  );
};

export default Episode;
