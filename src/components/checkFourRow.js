import React from 'react'

const checkFourRow = (width, board) => {
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 5; j++) {
      let firstIndex = j + (width * i);
      const indexesOfFourRow = [firstIndex, firstIndex + 1, firstIndex + 2, firstIndex + 3];
      const colorOfFirstSquare = board[firstIndex];
      const isMatch = indexesOfFourRow.every(square => board[square] === colorOfFirstSquare);
      if (isMatch) {
        indexesOfFourRow.forEach(square => board[square] = "");
      }
    }
  }
}

export default checkFourRow
