import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import GameOver from "./components/GameOver";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

function defrriveActivePlayer(gameTurns) {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  // const [activePlayer, setActiveplayer] = useState("X");
  const activePlayer = defrriveActivePlayer(gameTurns);

  let gameBoard = initialBoard;

  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  let winner = null;
  const hasDraw = gameTurns.length === 9 ? true : false;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareRow = gameBoard[combination[0].row][combination[0].column];
    const secondSquareRow =
      gameBoard[combination[1].row][combination[1].column];
    const thirdSquareRow = gameBoard[combination[2].row][combination[2].column];

    if (
      firstSquareRow &&
      firstSquareRow === secondSquareRow &&
      secondSquareRow === thirdSquareRow
    ) {
      winner = firstSquareRow;
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    // setActiveplayer((prevPlayer) => (prevPlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currentPlayer = defrriveActivePlayer(prevTurns);
      const updatedTurens = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurens;
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
