const CreateBoard = (setBoard) => {

  const colors = [
    "green",
    "blue",
    "red",
    "purple",
    "brown",
    "pink",
    "orange",
    "yellow",
  ];

  const width = colors.length;
  const newBoard = [];

  for (let i = 0; i < width * width; i++) {
    const randomIndex = Math.floor(Math.random() * colors.length);
    newBoard.push(colors[randomIndex]);
  }

  setBoard(newBoard);
};

export default CreateBoard
