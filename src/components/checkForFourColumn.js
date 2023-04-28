const checkForFourColumn = (width, board) => {
  for (let i = 0; i < 39; i++) {
    const indexesOfFourColumns = [i, i + width, i + width * 2, i + width * 3];
    const colorOfFirstSquare = board[i];
    const isMatch = indexesOfFourColumns.every(square => board[square] === colorOfFirstSquare);
    if (isMatch) {
      indexesOfFourColumns.forEach(square => board[square] = "");

    }
  }
}

export default checkForFourColumn
