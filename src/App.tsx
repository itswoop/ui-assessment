import { useState, useEffect } from "react";
import "./App.css";
import { MusicLibrary } from "./components";
import albumsData from "./fake-data/albums.json";

const App = () => {
  const [albums, setAlbums] = useState<object[]>(albumsData);

  useEffect(() => {
    let cleanData = []
    //format data to add alt field
    albumsData.forEach((album) => {
      
    });
  }, []);

  return (
    <div className="App">
      <MusicLibrary albumsData={albums} />
    </div>
  );
};

export default App;
