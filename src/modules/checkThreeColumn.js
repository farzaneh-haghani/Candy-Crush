const checkThreeColumn = (width, board, setScoreDisplay) => {

  const lastIndex = (width * width) - (width * 2);
  for (let i = 0; i < lastIndex; i++) {
    const indexesOfThreeColumns = [i, i + width, i + width * 2];
    const colorOfFirstSquare = board[i];
    const isBlank = board[i] === "images/blank-candy.png" ? true : false;
    const isMatch = indexesOfThreeColumns.every(square => board[square] === colorOfFirstSquare);
    if (isMatch && !isBlank) {
      indexesOfThreeColumns.forEach(square => board[square] = "images/blank-candy.png");
      setScoreDisplay((score) => score + 3)
    }
  }
}

export default checkThreeColumn
