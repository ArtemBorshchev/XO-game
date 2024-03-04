import React from 'react';
import { Link } from 'react-router-dom';

export const Content = () => {
  return (
    <section className='content'>
      <ul className='game-list'>
        <li className='game-list'><Link to="/tic-tac-toe"><h4>TicTacToe</h4></Link></li>
        <li className='game-list'><Link to="/game"><h4>another game</h4></Link></li>
      </ul>
    </section>
  )
}

export default Content;