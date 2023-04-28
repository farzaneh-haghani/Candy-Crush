import { useState, useEffect } from 'react';
import createBoard from './components/createBoard';
import checkForThreeColumn from './components/checkForThreeColumn';
import checkForFourColumn from './components/checkForFourColumn';


function App() {
  const [board, setBoard] = useState([]);
  const width = 8;


  useEffect(() => {
    createBoard(width, setBoard);
  }, []);


  useEffect(() => {
    const timer = setInterval(() => {
      checkForFourColumn(width, board);
      checkForThreeColumn(width, board);
      setBoard([...board]);
    }, 100);
    return () => clearInterval(timer);
  }, [checkForFourColumn, checkForThreeColumn, board]);


  return (
    <div className="flex p-30">
      <div className='flex flex-wrap w-[560px] h-[560px]  border-solid border-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        {board.map((eachColor, index) => {
          return (
            <img key={index} style={{ backgroundColor: eachColor }} alt='' className='w-[70px] h-[70px]' />)
        })}
      </div>
    </div>
  );
}

export default App;
