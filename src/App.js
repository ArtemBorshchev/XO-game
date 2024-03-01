import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>

    </>
  );
}

export default App;
