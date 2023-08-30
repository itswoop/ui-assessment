import _ from "lodash";
import { useState } from "react";

import "./LibraryDisplay.css";
import AlbumCard from "./AlbumCard";
import initialAlbums from "../albums.json";

export default function LibraryDisplay() {
  initialAlbums.forEach((album, i) => {
    album.id = `${_.kebabCase(album.artist)}:${_.kebabCase(album.title)}`;
    album.initialIndex = i;
  });

  const [albums, setAlbums] = useState(initialAlbums);

  const [sortDirection, setSortDirection] = useState("asc");
  const [sortKey, setSortKey] = useState("initialIndex");

  function deleteAlbum(albumId) {
    let updatedAlbums = _.reject(albums, { id: albumId });
    setAlbums(updatedAlbums);
  }

  function toggleSortDirection() {
    if (isEmpty) return;
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  }

  let albumCardList = _.orderBy(albums, [sortKey], [sortDirection]).map(
    (album, i) => <AlbumCard key={i} albumData={album} onDelete={deleteAlbum} />
  );

  const isEmpty = !albumCardList.length;

  if (isEmpty) {
    albumCardList = <div>There are no albums in your library :(</div>;
  }

  return (
    <div className='library-display'>
      <div className='sort-container'>
        <div
          className={"sort-direction-toggle" + (isEmpty ? " disabled" : "")}
          onClick={toggleSortDirection}
        >
          {sortDirection === "asc" ? "\u2191" : "\u2193"}
        </div>
        <select
          className='sort-key-select'
          value={sortKey}
          onChange={e => setSortKey(e.target.value)}
          disabled={isEmpty}
        >
          <option value='initialIndex'>Default</option>
          <option value='title'>Album Title</option>
          <option value='artist'>Artist</option>
        </select>
      </div>
      <div className='card-container'>{albumCardList}</div>
    </div>
  );
}
