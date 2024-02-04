import React, { useState, useMemo } from "react";
import SquareBox from "./SquareBox";
import { row, column } from "./constants";
import { calculateWinner } from "./utils";
function Game() {
  const totalBoxes = row * column;
  const initialBoard = Array(totalBoxes).fill(null);
  const [board, setBoard] = useState([initialBoard]);
  const [chance, setChance] = useState("X");
  const [message, setMesage] = useState(null);
  const winner = useMemo(() => {
    if (calculateWinner(board[0])) {
      setMesage(`${calculateWinner(board[0])} won the game`);
    }
    if (totalBoxes === board[0].filter((value) => value != null).length) {
      setMesage("No one wins the game");
    }
    return calculateWinner(board[0]);
  }, [board]);

  const handleSquareBoxClicked = (indexOfSquareClicked) => {
    if (board[0][indexOfSquareClicked] || winner) {
      return;
    }
    const newBoard = [...board];
    newBoard[0][indexOfSquareClicked] = chance;
    setBoard(newBoard);
    setChance(chance === "X" ? "O" : "X");
  };
  return (
    <div>
      <SquareBox
        column={column}
        row={row}
        handleSquareBoxClicked={handleSquareBoxClicked}
        board={board[0]}
      />
      {message && <p className="makeFlex justifyCenter">{message}</p>}
      <div>
        <button className="primaryBtn">Undo</button>
        <button className="primaryBtn" onClick={() => setBoard([initialBoard])}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Game;
