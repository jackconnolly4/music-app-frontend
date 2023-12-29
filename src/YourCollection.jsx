import axios from "axios";
import { useState, useEffect } from "react";
import { Records } from "./Records";
import { FavoriteArtists } from "./FavoriteArtists";

export function YourCollection(props) {
  const [records, setRecords] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const handleIndexRecords = () => {
    console.log("handleIndexRecords");
    axios.get("http://localhost:3000/collection.json").then((response) => {
      console.log(response.data);
      setRecords(response.data);
    });
  };
  const handleIndexFavorites = () => {
    console.log("handleIndexFavorites");
    axios.get("http://localhost:3000/favorite_artists.json").then((response) => {
      console.log(response.data);
      setFavorites(response.data);
    });
  };

  useEffect(handleIndexRecords, []);
  useEffect(handleIndexFavorites, []);
  return (
    <div>
      <FavoriteArtists favorites={favorites} />
      <Records records={records} />
    </div>
  );
}
