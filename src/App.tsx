import { useState, useEffect } from "react";
import "./App.css";
import { MusicLibrary } from "./components";
import data from "./fake-data/albums.json";

export interface RawData {
  title: string;
  artist: string;
  artworkUrl: string;
}

export interface CleanData {
  title: string;
  artist: string;
  artworkUrl: string;
  imageAlt: string;
}

const App = () => {
  const [albumsData, setAlbumsData] = useState<CleanData[]>([]);

  const handleRemoveButtonClick = (index: number) => {
    let newArray = [...albumsData];
    newArray.splice(index, 1);
    setAlbumsData(newArray);
  };
  const handleSortByTitleClick = () => {
    let newData = [...albumsData];
    newData.sort((a, b) => a.title.localeCompare(b.title));
    setAlbumsData(newData);
  };
  const handleSortByArtistClick = () => {
    let newData = [...albumsData];
    newData.sort((a, b) => a.artist.localeCompare(b.artist));
    console.log("howdy");
    setAlbumsData(newData);
  };

  useEffect(() => {
    let cleanedData: CleanData[] = [];
    //format data to add alt field
    data.forEach((album: RawData) => {
      const lastSlashIndex = album.artworkUrl.lastIndexOf("/");
      let altString =
        lastSlashIndex !== -1
          ? album.artworkUrl.slice(lastSlashIndex + 1)
          : album.artworkUrl;

      let cleanData = {
        title: album.title,
        artist: album.artist,
        artworkUrl: album.artworkUrl,
        imageAlt: altString,
      };
      cleanedData.push(cleanData);
    });
    setAlbumsData(cleanedData);
  }, []);

  return (
    <div className="App">
      <MusicLibrary
        albumsData={albumsData}
        handleRemoveButtonClick={handleRemoveButtonClick}
        handleSortByTitleClick={handleSortByTitleClick}
        handleSortByArtistClick={handleSortByArtistClick}
      />
    </div>
  );
};

export default App;
