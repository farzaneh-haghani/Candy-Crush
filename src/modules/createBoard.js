const createBoard = (width, images, setBoard) => {

  const board = [];
  for (let i = 0; i < width * width; i++) {
    const randomIndex = Math.floor(Math.random() * images.length);
    board.push(images[randomIndex]);
  }
  setBoard(board);
};

export default createBoard
