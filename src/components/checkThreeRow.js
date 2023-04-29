const checkThreeRow = (width, board) => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 6; j++) {
      let firstIndex = j + (width * i);
      const indexesOfThreeRow = [firstIndex, firstIndex + 1, firstIndex + 2];
      const colorOfFirstSquare = board[firstIndex];
      const isMatch = indexesOfThreeRow.every(square => board[square] === colorOfFirstSquare);
      if (isMatch) {
        indexesOfThreeRow.forEach(square => board[square] = "");
      }
    }
  }
}

export default checkThreeRow
