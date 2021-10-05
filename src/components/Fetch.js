import Game from "./Game";

import data from "./FetchData";
function GameFetch() {
  const GameComponent = data.map((game) => {
    return (
      <Game
        key={game.key}
        title={game.title}
        img={game.thumbnail}
        desc={game.short_description}
        publisher={game.publisher}
        url={game.game_url}
      />
    );
  });
  return (
    <div className="container">
      <br />
      <center>
        <div className="blob">{GameComponent}</div>
      </center>
    </div>
  );
}

export default GameFetch;
