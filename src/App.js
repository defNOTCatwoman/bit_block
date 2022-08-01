import './styles.css';
import Game from "./components/Game"

function App() {
  return (
    <div className="App">
      <Game rows={30} columns={15} />
    </div>
  );
}

export default App;
