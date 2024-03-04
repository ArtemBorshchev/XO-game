import React from 'react';
import { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import {user} from '../usefullFunctions/user';

import '../styles/styles.css';


const Home = () => {
  console.log(user)
  const [showGameList, setShowGameList] = useState(false);
  
  // showGameList ? 

  return (
    <>
      <Header showGameList={showGameList} setShowGameList={setShowGameList}/>
        {showGameList && <Content />}
      <Footer />
    </>
  );
};

export default Home;