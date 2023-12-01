export default function GameOver({ winner, isGamerestart }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      {winner && <p>{winner} has Won!</p>}
      {!winner && <p>It's a draw!</p>}
      <p>
        <button onClick={isGamerestart}>Rematch</button>
      </p>
    </div>
  );
}
