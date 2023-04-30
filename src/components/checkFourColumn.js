const checkFourColumn = (width, board) => {

  const lastIndex = (width * width) - (3 * width);
  for (let i = 0; i < lastIndex; i++) {
    const indexesOfFourColumns = [i, i + width, i + width * 2, i + width * 3];
    const colorOfFirstSquare = board[i];
    const isMatch = indexesOfFourColumns.every(square => board[square] === colorOfFirstSquare);
    if (isMatch) {
      indexesOfFourColumns.forEach(square => board[square] = "");
    }
  }
}

export default checkFourColumn
