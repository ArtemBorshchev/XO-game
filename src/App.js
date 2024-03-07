import React from 'react';
import { Routes, Route } from 'react-router-dom';

import LoginForm from './components/LoginForm';
import Home from './components/Home';
import { GameList } from './components/GameList';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/game-list' element={<GameList />}/>
        <Route path='/login' element={<LoginForm />}/>
      </Routes>

    </>
  );
}

export default App;
