import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Episode from "../components/Episode";

export const Show = () => {
  const { showId } = useParams();
  const [episodeInfo, setEpisodeInfo] = useState([]);
  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${showId}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        setEpisodeInfo(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div>
        {episodeInfo && (
          <Episode
            name={episodeInfo?.name}
            image={episodeInfo?.image?.original}
            language={episodeInfo?.language}
            country={episodeInfo?.network?.country?.name}
            rating={episodeInfo?.rating?.average}
          />
        )}
      </div>
    </>
  );
};
export default Show;
