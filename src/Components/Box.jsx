import React from 'react';

export function Box({ id, state, handleClick, player }) {
  return (
    <button
      id={id}
      className="box"
      onClick={() => {
        handleClick(id, player);
      }}
    >
      {state === undefined && <p></p>}
      {state !== undefined && state}
    </button>
  );
}
