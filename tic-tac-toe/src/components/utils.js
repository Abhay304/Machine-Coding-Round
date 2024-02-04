import { winnerCombos } from "./constants";
export const calculateWinner = (boards) => {
  for (let i = 0; i < winnerCombos.length; i++) {
    const [a, b, c] = winnerCombos[i];
    if (boards[a] === boards[b] && boards[a] === boards[c]) {
      return boards[a];
    }
  }
  return null;
};
