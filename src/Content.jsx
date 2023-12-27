import { AlbumsIndex } from "./AlbumsIndex";
import { LogoutLink } from "./LogoutLink";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [albums, setAlbums] = useState([]);

  const handleIndexAlbums = () => {
    console.log("handleIndexAlbums");
    axios.get("http://localhost:3000/albums.json").then((response) => {
      console.log(response.data);
      setAlbums(response.data);
    });
  };

  useEffect(handleIndexAlbums, []);
  return (
    <main>
      <AlbumsIndex albums={albums} />
      <LogoutLink />
    </main>
  );
}
