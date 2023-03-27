import React from 'react';
import { Box } from 'src/Components/Box.jsx';
import '/Users/victoriamertens/Documents/Prime Academy Docs /Graduation-Projects/tic-tac-toe-proj/src/Components/Board.css';

import { useState } from 'react';

export function Board() {
  let [player, setPlayer] = useState('X');
  let [boardData, setBoardData] = useState(Array.apply(null, Array(9)));

  let winningConfig = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let handleWinner = () => {
    for (let win of winningConfig) {
      if (
        boardData[win[0]] === undefined ||
        boardData[win[1]] === undefined ||
        boardData[win[2]] === undefined
      ) {
        console.log('No winners yet:');
      } else if (
        boardData[win[0]] === boardData[win[1]] &&
        boardData[win[1]] === boardData[win[2]]
      ) {
        return true;
      }
    }
  };

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

  let winnerFinal = handleWinner();
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
              winner={winnerFinal}
            />
          );
        })}
      </div>
      {winnerFinal && player === 'O' && <p>Player X you won!</p>}
      {winnerFinal && player === 'X' && <p>Player O you won!</p>}
      {!winnerFinal && <p>Player {player}, it is your turn!</p>}
    </>
  );
}
