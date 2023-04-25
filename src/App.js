import { useState, useEffect } from 'react';
import CreateBoard from './CreateBoard';

function App() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    CreateBoard(setBoard);
  }, []);

  return (
    <div className="flex p-30">
      <div className='flex flex-wrap w-[560px] h-[560px]  border-solid border-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        {board.map((eachColor, index) => {
          return (
            <img key={index} style={{ backgroundColor: eachColor }} alt="CandyColor" className='w-[70px] h-[70px]' />)
        })}
      </div>
    </div>
  );
}

export default App;
