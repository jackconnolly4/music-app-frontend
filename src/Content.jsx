import { AlbumsIndex } from "./AlbumsIndex";
import { ArtistsIndex } from "./ArtistsIndex";
import { LogoutLink } from "./LogoutLink";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { YourCollection } from "./YourCollection";

export function Content() {
  const [albums, setAlbums] = useState([]);
  const [artists, setArtists] = useState([]);

  const handleIndexAlbums = () => {
    console.log("handleIndexAlbums");
    axios.get("http://localhost:3000/albums.json").then((response) => {
      console.log(response.data);
      setAlbums(response.data);
    });
  };

  const handleIndexArtists = () => {
    console.log("handleIndexArtists");
    axios.get("http://localhost:3000/artists.json").then((response) => {
      console.log(response.data);
      setArtists(response.data);
    });
  };

  useEffect(handleIndexAlbums, []);
  useEffect(handleIndexArtists, []);
  return (
    <main>
      <Routes>
        <Route path="/albums" element={<AlbumsIndex albums={albums} />} />
        <Route path="/artists" element={<ArtistsIndex artists={artists} />} />
        <Route path="/collection" element={<YourCollection />} />
        <Route path="/logout" element={<LogoutLink />} />
      </Routes>
      <h1>Welcome to the Music Box</h1>
    </main>
  );
}
