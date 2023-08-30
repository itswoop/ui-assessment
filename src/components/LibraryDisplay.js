import _ from "lodash";
import { useState } from "react";

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

  const albumCardList = _.orderBy(albums, [sortKey], [sortDirection]).map(
    (album, i) => <AlbumCard key={i} albumData={album} onDelete={deleteAlbum} />
  );

  return (
    <div className='library-display'>
      <div>
        <span
          onClick={() =>
            setSortDirection(sortDirection === "asc" ? "desc" : "asc")
          }
        >
          {sortDirection === "asc" ? "\u2191" : "\u2193"}
        </span>
        <select value={sortKey} onChange={e => setSortKey(e.target.value)}>
          <option value='initialIndex'>Default</option>
          <option value='title'>Album Title</option>
          <option value='artist'>Artist</option>
        </select>
      </div>
      <div className='card-container'>{albumCardList}</div>
    </div>
  );
}
