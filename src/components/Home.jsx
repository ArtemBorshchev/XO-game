import React, { useState } from 'react';

import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import LoginForm from './LoginForm';
import GameList from './GameList';

import {user} from '../usefullFunctions/user';

import '../styles/styles.css';


const Home = () => {
  const [content, setContent] = useState(null);
  const [gameList, setGameList] = useState(false);
  const [isLoginClicked, setIsLoginClicked] = useState(false);
  const [online, setOnline] = useState(false);

  const showLoginForm = () => {
    if (!online) { //online === false
      setContent(<LoginForm 
                    setContent={setContent} 
                    user={user}
                    online={online} 
                    setOnline={setOnline} 
                    isLoginClicked={isLoginClicked} 
                    setIsLoginClicked={setIsLoginClicked}/>)
    } else { //if online === true
      user.name = '';
      user.isLogin = !user.isLogin;
      setContent(null);
      setOnline(!online);
      setIsLoginClicked(!isLoginClicked);
    }
  };

  const showGameList = () => {
    !gameList ? setContent(<GameList />) : setContent(null);
    setGameList(!gameList);
  };

  return (
    <>
      <Header online={online} setOnline={setOnline} onMenuClick={showGameList} onLoginClick={showLoginForm}/>
      <Content content={content}/>
      <Footer />
    </>
  );
};

export default Home;