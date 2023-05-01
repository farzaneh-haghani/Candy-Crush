import React from "react";

const ScoreBoard = ({ score }) => {
  return (
    <div className="m-5 bg-orange-400 p-5 rounded-xl text-lg">
      <h2>Score: {score}</h2>
    </div>
  );
};

export default ScoreBoard;
