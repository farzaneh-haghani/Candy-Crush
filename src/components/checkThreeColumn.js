const checkThreeColumn = (width, board) => {

  const lastIndex = (width * width) - (width * 2);
  for (let i = 0; i < lastIndex; i++) {
    const indexesOfThreeColumns = [i, i + width, i + width * 2];
    const colorOfFirstSquare = board[i];
    const isMatch = indexesOfThreeColumns.every(square => board[square] === colorOfFirstSquare);
    if (isMatch) {
      indexesOfThreeColumns.forEach(square => board[square] = "");
    }
  }
}

export default checkThreeColumn
