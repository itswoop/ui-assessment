import _ from "lodash";
import { useState } from "react";

import "./LibraryDisplay.css";
import AlbumCard from "./AlbumCard";
import initialAlbums from "../albums.json";

/* The library containing the full list of albums and sort/delete functionalities
 */
export default function LibraryDisplay() {
  /* Add two additional fields to each album:
    1. Unique ID used for album deletion
    2. Initial index (order from json file) to allow default sort
   */
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
    // disable functionality if there are no albums to sort
    if (isEmpty) return;
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  }

  // create list of ordered albumcard html elements
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
