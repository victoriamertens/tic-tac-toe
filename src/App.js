import React from 'react';
import { Board } from 'src/Components/Board.jsx';
import { Turn } from 'src/Components/TurnCounter.jsx';

const App = () => (
  <div>
    <h1>Tic-Tac-Toe</h1>
    <Board />
    <Turn />
  </div>
);

export default App;
