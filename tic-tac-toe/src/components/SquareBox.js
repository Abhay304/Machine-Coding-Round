import React from "react";

const SquareBox = ({ column, row, handleSquareBoxClicked, board }) => {
  const renderBox = (index) => (
    <div
      key={index}
      className="squareBox makeFlex justifyCenter"
      onClick={() => handleSquareBoxClicked(index)}
    >
      {board[index]}
    </div>
  );
  const renderRow = (start, end) => (
    <div className="makeFlex">
      {Array(end - start)
        .fill(null)
        .map((_, index) => renderBox(start + index))}
    </div>
  );

  const renderBoard = () => {
    const rowsArray = [];
    for (let i = 0; i < column * row; i += column) {
      rowsArray.push(renderRow(i, i + column));
    }
    return rowsArray;
  };

  return renderBoard();
};

export default SquareBox;
