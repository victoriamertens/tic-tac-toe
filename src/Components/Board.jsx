import React from 'react';
import { Box } from 'src/Components/Box.jsx';
import '/Users/victoriamertens/Documents/Prime Academy Docs /Graduation-Projects/tic-tac-toe-proj/src/Components/Board.css';

import { useState } from 'react';

export function Board() {
  let [box1, setBox1] = useState('Box 1');
  let [player, setPlayer] = useState('X');

  let handleClick = (boxNum, player) => {
    console.log(boxNum, player, box1);
    setBox1(player);
    if (player === 'X') {
      setPlayer('O');
    }
    if (player === 'O') {
      setPlayer('X');
    }
  };
  return (
    <div class="container">
      <Box handleClick={handleClick} state={box1} id="1" player={player} />
      <div id="box2" class="box" onClick={() => handleClick(1, player)}>
        Box 2
      </div>
      <div id="box3" class="box">
        Box 3
      </div>
      <div id="box4" class="box">
        Box 4
      </div>
      <div id="box5" class="box">
        Box 5
      </div>
      <div id="box6" class="box">
        Box 6
      </div>
      <div id="box7" class="box">
        Box 7
      </div>
      <div id="box8" class="box">
        Box 8
      </div>
      <div id="box9" class="box">
        Box 9
      </div>
    </div>
  );
}
