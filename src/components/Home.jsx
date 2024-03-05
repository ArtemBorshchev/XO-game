import React, { useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import LoginForm from './LoginForm';

import {user} from '../usefullFunctions/user';

import '../styles/styles.css';


const Home = () => {
  const [showGameList, setShowGameList] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [online, setOnline] = useState(false);
  const handleMouseEnter = (e) => {
    e.preventDefault()
    setShowGameList(!showGameList);
  };
  const handleMouseEnter2 = (e) => {
    e.preventDefault();
    if (online && !isLogin) {
      user.name = '';
      user.isLogin = false;
      user.moves = []
      setOnline(!online)
    } else {
      setIsLogin(!isLogin);
    }
  };
  console.log('логин нажат', isLogin);
  console.log('залогинился', online);

  return (
    <>
      <Header isLogin={isLogin} setIsLogin={setIsLogin} online={online} setOnline={setOnline}
              handleMouseEnter={handleMouseEnter} handleMouseEnter2={handleMouseEnter2}/>

      ({!online && isLogin 
        && <LoginForm 
              online={online} setOnline={setOnline} 
              isLogin={isLogin} setIsLogin={setIsLogin}
            />
      }) 

      {showGameList && <Content user={user}/>}
      
      <Footer />
    </>
  );
};

export default Home;