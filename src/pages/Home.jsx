import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import dummyData from "../dummyData.json"; // To be replaced with your api response data

export const Home = () => {
  const [cardList, setCardList] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/shows")
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setCardList(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Space X Ships</h1>
      <div
        className="App"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          rowGap: "10px",
          columnGap: "20px",
        }}
      >
        {cardList.map((card, index) => {
          return (
            <Link
              key={index}
              to={{
                pathname: `/show/${card.id}`,
              }}
            >
              <Card
                image={card.image.medium}
                name={card.name}
                home_port={card.type}
                roles={card.genres}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
