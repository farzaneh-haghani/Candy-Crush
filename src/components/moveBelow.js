const moveBelow = (width, colors, board) => {

  const lastIndex = (width * width) - width
  for (let i = 0; i < lastIndex; i++) {
    if (i < width && board[i] === "") {
      const randomIndex = Math.floor(Math.random() * colors.length);
      board[i] = colors[randomIndex];
    }
    if (board[i + width] === "") {
      board[i + width] = board[i];
      board[i] = "";
    }
  }
}

export default moveBelow