const checkFourRow = (width, board, setScoreDisplay) => {

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < width - 3; j++) {
      const firstIndex = j + (width * i);
      const indexesOfFourRow = [firstIndex, firstIndex + 1, firstIndex + 2, firstIndex + 3];
      const colorOfFirstSquare = board[firstIndex];
      const isBlank = board[i] === "images/blank-candy.png" ? true : false;
      const isMatch = indexesOfFourRow.every(square => board[square] === colorOfFirstSquare);
      if (isMatch && !isBlank) {
        indexesOfFourRow.forEach(square => board[square] = "images/blank-candy.png");
        setScoreDisplay((score) => score + 4)
      }
    }
  }
}

export default checkFourRow
