import _ from "lodash";
import { useState } from "react";

import "./App.css";
import AlbumCard from "./components/AlbumCard";
import initialAlbums from "./albums.json";

function LibraryDisplay() {
  initialAlbums.forEach(
    album =>
      (album.id = `${_.kebabCase(album.artist)}:${_.kebabCase(album.title)}`)
  );

  const [albums, setAlbums] = useState(initialAlbums);

  function deleteAlbum(albumId) {
    let updatedAlbums = _.reject(albums, { id: albumId });
    setAlbums(updatedAlbums);
  }

  let albumCardList = [];
  albums.forEach((album, i) => {
    albumCardList.push(
      <AlbumCard key={i} albumData={album} onDelete={deleteAlbum} />
    );
  });

  return <div className='card-container'>{albumCardList}</div>;
}

function App() {
  return (
    <div className='App'>
      <div>
        <h2>&#127925; Your Music &#127925;</h2>
      </div>
      <LibraryDisplay />
    </div>
  );
}

export default App;
