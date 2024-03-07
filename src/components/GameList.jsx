import React from 'react';
import { Link } from 'react-router-dom';

export const GameList = () => {
  return (
    <div>
      <ul className='game-list'>
        <li className='game-list'><Link to="/tic-tac-toe"><h4>TicTacToe</h4></Link></li>
        <li className='game-list'><Link to="/game"><h4>another game</h4></Link></li>
      </ul>
    </div>
  )
}

export default GameList;