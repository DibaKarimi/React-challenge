import React from "react";
import Image from "./Image";
import Title from "./Title";
import Subheading from "./Subheading";

const Card = (props) => {
  const { image, name, home_port, roles } = props;
  console.log(roles);
  return (
    <div className="card">
      <Title title={name} />
      <Image imageURL={image} height="400" />
      <Subheading home_port={home_port} roles={roles} />
    </div>
  );
};

export default Card;
