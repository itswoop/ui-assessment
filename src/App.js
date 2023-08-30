import "./App.css";
import LibraryDisplay from "./components/LibraryDisplay";

function App() {
  return (
    <div className='app'>
      <div className='app-title'>
        <h2>&#127925; Your Music &#127925;</h2>
      </div>
      <LibraryDisplay />
    </div>
  );
}

export default App;
