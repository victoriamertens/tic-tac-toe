import React from 'react';

export function Box({ state, id, handleClick, player }) {
  console.log(handleClick);
  return (
    <button
      id="box1"
      class="box"
      onClick={() => {
        handleClick(id, player);
      }}
    >
      {state}
    </button>
  );
}
