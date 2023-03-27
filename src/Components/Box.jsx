import React from 'react';
import 'src/Components/Box.css';

export function Box({ id, state, handleClick, player, winner }) {
  return (
    <button
      id={id}
      className="box"
      disabled={winner}
      onClick={() => {
        handleClick(id, player);
      }}
    >
      {state === undefined && <p></p>}
      {state !== undefined && state}
    </button>
  );
}
