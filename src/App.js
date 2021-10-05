import Game from "./components/Game";
import "bootstrap/dist/css/bootstrap.min.css";
import GameFetch from "./components/Fetch";

export default function App() {
  return (
    <div className="container">
      <GameFetch />
    </div>
  );
}
