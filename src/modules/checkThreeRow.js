const checkThreeRow = (width, board, setScoreDisplay) => {

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < width - 2; j++) {
      const firstIndex = j + (width * i);
      const indexesOfThreeRow = [firstIndex, firstIndex + 1, firstIndex + 2];
      const colorOfFirstSquare = board[firstIndex];
      const isBlank = board[i] === "images/blank-candy.png" ? true : false;
      const isMatch = indexesOfThreeRow.every(square => board[square] === colorOfFirstSquare);
      if (isMatch && !isBlank) {
        indexesOfThreeRow.forEach(square => board[square] = "images/blank-candy.png");
        setScoreDisplay((score) => score + 3)
      }
    }
  }
}

export default checkThreeRow
