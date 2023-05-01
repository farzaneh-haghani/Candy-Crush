import { useState, useEffect } from 'react';
import createBoard from './modules/createBoard';
import checkThreeColumn from './modules/checkThreeColumn';
import checkFourColumn from './modules/checkFourColumn';
import checkThreeRow from './modules/checkThreeRow';
import checkFourRow from './modules/checkFourRow';
import moveBelow from './modules/moveBelow';
import ScoreBoard from './component/ScoreBoard';


function App() {
  const [board, setBoard] = useState([]);
  const [squareDragged, setSquareDragged] = useState(null);
  const [squareReplaced, setSquareReplaced] = useState(null);
  const [scoreDisplay, setScoreDisplay] = useState(0);
  const width = 8;

  const images = [
    "images/blue-candy.png",
    "images/green-candy.png",
    "images/orange-candy.png",
    "images/purple-candy.png",
    "images/red-candy.png",
    "images/yellow-candy.png"
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
      const squareDraggedColor = squareDragged.getAttribute("src");
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
      board[squareDraggedId] = squareReplaced.getAttribute("src");
      board[squareReplacedId] = squareDragged.getAttribute("src");
      setBoard([...board]);
    }
  }

  useEffect(() => {
    createBoard(width, images, setBoard);
  }, []);


  useEffect(() => {
    const timer = setInterval(() => {
      checkFourColumn(width, board, setScoreDisplay);
      checkFourRow(width, board, setScoreDisplay);
      checkThreeColumn(width, board, setScoreDisplay);
      checkThreeRow(width, board, setScoreDisplay);
      moveBelow(width, images, board);
      setBoard([...board]);
    }, 100);
    return () => clearInterval(timer);
  }, [board]);


  return (
    <div className="flex justify-center items-center h-full m-0 pt-5 sm:flex-col xl:flex-row">
      <div className='flex flex-wrap sm:w-[320px] sm:h-[320px] md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] xl:w-[560px] xl:h-[560px] '>
        {board.map((eachImage, index) => {
          return (
            <div className='imageContainer'>
              <img
                key={index}
                src={eachImage}
                alt=""
                className='sm:w-[40px] sm:h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] xl:w-[70px] xl:h-[70px]'
                data-id={index}
                draggable={true}
                onDragStart={dragStart}
                onDragOver={(e) => e.preventDefault()}
                onDragEnter={(e) => e.preventDefault()}
                onDragLeave={(e) => e.preventDefault()}
                onDrop={dragDrop}
                onDragEnd={dragEnd}
              />
            </div>
          )
        })}
      </div>
      <ScoreBoard score={scoreDisplay} />
    </div>
  );
}

export default App;