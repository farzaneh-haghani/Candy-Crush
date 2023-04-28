const checkForThreeColumn = (width, board) => {
  for (let i = 0; i < 48; i++) {
    const indexesOfThreeColumns = [i, i + width, i + width * 2];
    const colorOfFirstSquare = board[i];
    const isMatch = indexesOfThreeColumns.every(square => board[square] === colorOfFirstSquare);
    if (isMatch) {
      indexesOfThreeColumns.forEach(square => board[square] = "");
    }
  }
}

export default checkForThreeColumn
