const moveBelow = (width, images, board) => {

  const lastIndex = (width * width) - width
  for (let i = 0; i < lastIndex; i++) {
    if (i < width && board[i] === "images/blank-candy.png") {
      const randomIndex = Math.floor(Math.random() * images.length);
      board[i] = images[randomIndex];
    }
    if (board[i + width] === "images/blank-candy.png") {
      board[i + width] = board[i];
      board[i] = "images/blank-candy.png";
    }
  }
}

export default moveBelow