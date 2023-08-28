import "./App.css";
import AlbumCard from "./components/AlbumCard";
import albums from "./albums.json";

function App() {
  let albumCardList = [];
  albums.forEach(album => {
    albumCardList.push(
      <AlbumCard
        title={album.title}
        artist={album.artist}
        artworkUrl={album.artworkUrl}
      />
    );
  });

  return (
    <div className='App'>
      <div>
        <h2>&#127925; Your Music &#127925;</h2>
      </div>
      <div className='card-container'>{albumCardList}</div>
    </div>
  );
}

export default App;
