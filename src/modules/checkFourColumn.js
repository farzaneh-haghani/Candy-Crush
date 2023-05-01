const checkFourColumn = (width, board, setScoreDisplay) => {

  const lastIndex = (width * width) - (3 * width);
  for (let i = 0; i < lastIndex; i++) {
    const indexesOfFourColumns = [i, i + width, i + width * 2, i + width * 3];
    const colorOfFirstSquare = board[i];
    const isBlank = board[i] === "images/blank-candy.png" ? true : false;
    const isMatch = indexesOfFourColumns.every(square => board[square] === colorOfFirstSquare);

    if (isMatch && !isBlank) {
      indexesOfFourColumns.forEach(square => board[square] = "images/blank-candy.png");
      setScoreDisplay((score) => score + 4)
    }
  }
}

export default checkFourColumn
