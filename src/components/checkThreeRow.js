const checkThreeRow = (width, board) => {

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < width - 2; j++) {
      const firstIndex = j + (width * i);
      const indexesOfThreeRow = [firstIndex, firstIndex + 1, firstIndex + 2];
      const colorOfFirstSquare = board[firstIndex];
      const isMatch = indexesOfThreeRow.every(square => board[square] === colorOfFirstSquare);
      if (isMatch) {
        indexesOfThreeRow.forEach(square => board[square] = "images/blank-candy.png");
      }
    }
  }
}

export default checkThreeRow
