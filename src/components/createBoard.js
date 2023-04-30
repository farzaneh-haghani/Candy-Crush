const createBoard = (width, colors, setBoard) => {

  const board = [];
  for (let i = 0; i < width * width; i++) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    board.push(colors[randomIndex]);
  }
  setBoard(board);
};

export default createBoard
