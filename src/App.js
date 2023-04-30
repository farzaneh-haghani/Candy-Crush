import { useState, useEffect } from 'react';
import createBoard from './components/createBoard';
import checkThreeColumn from './components/checkThreeColumn';
import checkFourColumn from './components/checkFourColumn';
import checkThreeRow from './components/checkThreeRow';
import checkFourRow from './components/checkFourRow';
import moveBelow from './components/moveBelow';


function App() {
  const [board, setBoard] = useState([]);
  const [squareDragged, setSquareDragged] = useState(null);
  const [squareReplaced, setSquareReplaced] = useState(null);
  const width = 8;



  const colors = [
    "green",
    "blue",
    "red",
    "purple",
    "orange",
    "yellow",
  ];

  const dragStart = (e) => {
    setSquareDragged(e.target);
  }

  const dragDrop = (e) => {
    setSquareReplaced(e.target);
  }



  const dragEnd = () => {
    if (!squareReplaced) {
      setSquareDragged(null);
      return;
    }

    const squareDraggedId = parseInt(squareDragged.getAttribute("data-id"));
    const squareReplacedId = parseInt(squareReplaced.getAttribute("data-id"));

    const validMoves = [squareDraggedId - 1, squareDraggedId + 1, squareDraggedId - width, squareDraggedId + width];
    const isValidMoves = validMoves.includes(squareReplacedId);

    const checkingColors = () => {
      const squareDraggedColor = squareDragged.style.backgroundColor;
      const diff = squareDraggedId - squareReplacedId;
      let direction = "";
      if (diff === 1)
        direction = "left"
      if (diff === -1)
        direction = "right"
      if (diff === width)
        direction = "up"
      if (diff === -width)
        direction = "down"

      const rightColor = board[squareReplacedId + 1];
      const secondRightColor = board[squareReplacedId + 2];
      const leftColor = board[squareReplacedId - 1];
      const secondLeftColor = board[squareReplacedId - 2];
      const upColor = board[squareReplacedId + width];
      const secondUpColor = board[squareReplacedId + width * 2];
      const downColor = board[squareReplacedId - width];
      const secondDownColor = board[squareReplacedId - width * 2];

      if (direction !== "left" && squareDraggedColor === rightColor && squareDraggedColor === secondRightColor) {
        return true;
      }

      if (direction !== "right" && squareDraggedColor === leftColor && squareDraggedColor === secondLeftColor) {
        return true;
      }

      if (direction !== "left" && direction !== "right" && squareDraggedColor === leftColor && squareDraggedColor === rightColor) {
        return true;
      }

      if (direction !== "up" && squareDraggedColor === upColor && squareDraggedColor === secondUpColor) {
        return true;
      }

      if (direction !== "down" && squareDraggedColor === downColor && squareDraggedColor === secondDownColor) {
        return true;
      }

      if (direction !== "up" && direction !== "down" && squareDraggedColor === downColor && squareDraggedColor === upColor) {
        return true;
      }

      else
        return false;
    }

    if (isValidMoves && checkingColors()) {
      board[squareDraggedId] = squareReplaced.style.backgroundColor;
      board[squareReplacedId] = squareDragged.style.backgroundColor;
    }
  }



  useEffect(() => {
    createBoard(width, colors, setBoard);
  }, []);


  useEffect(() => {
    const timer = setInterval(() => {
      checkFourColumn(width, board);
      checkFourRow(width, board);
      checkThreeColumn(width, board);
      checkThreeRow(width, board);
      moveBelow(width, colors, board);
      setBoard([...board]);
    }, 100);
    return () => clearInterval(timer);
  }, [board]);


  return (
    <div className="flex p-30">
      <div className='flex flex-wrap w-[560px] h-[560px]  border-solid border-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        {board.map((eachColor, index) => {
          return (
            <img
              key={index}
              style={{ backgroundColor: eachColor }}
              alt={eachColor}
              className='w-[70px] h-[70px]'
              data-id={index}
              draggable={true}
              onDragStart={dragStart}
              onDragOver={(e) => e.preventDefault()}
              onDragEnter={(e) => e.preventDefault()}
              onDragLeave={(e) => e.preventDefault()}
              onDrop={dragDrop}
              onDragEnd={dragEnd}
            />
          )
        })}
      </div>
    </div>
  );
}

export default App;
