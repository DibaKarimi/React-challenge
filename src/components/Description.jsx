import React from "react";
export const Description = (props) => {
  const { language, country, rating } = props;
  return (
    <>
      <div className="pt-2 m-1">Language: {language}</div>
      <div className="pt-1 m-1">Country: {country}</div>
      <div className="p-1 m-1">Rating: {rating}</div>
    </>
  );
};

export default Description;
