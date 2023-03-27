import React from 'react';
import { Box } from 'src/Components/Box.jsx';
import '/Users/victoriamertens/Documents/Prime Academy Docs /Graduation-Projects/tic-tac-toe-proj/src/Components/Board.css';

import { useState } from 'react';

export function Board() {
  let [player, setPlayer] = useState('X');
  let [boardData, setBoardData] = useState(Array.apply(null, Array(9)));
  console.log(typeof boardData);

  let handleClick = (boxNum, player) => {
    let cloneArr = [...boardData];
    cloneArr[boxNum] = player;
    console.log(cloneArr);
    setBoardData(cloneArr);
    if (player === 'X') {
      setPlayer('O');
    }
    if (player === 'O') {
      setPlayer('X');
    }
  };
  return (
    <>
      <div className="container">
        {boardData.map((el, index) => {
          return (
            <Box
              key={index}
              className="box"
              handleClick={handleClick}
              state={el}
              player={player}
              id={index}
            />
          );
        })}
      </div>
      <p>Player {player}, it is your turn!</p>
    </>
  );
}
