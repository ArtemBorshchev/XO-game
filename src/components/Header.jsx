import React, { useState } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import Content from './Content';
import logoMenu from '../components/lines_menu_burger_icon_123889.svg';
import user from '../usefullFunctions/user';

const Header = ({showGameList, setShowGameList = () => {}}) => {
  const navigate = useNavigate();

  const handleMouseEnter = (e) => {
    e.preventDefault()
    setShowGameList(!showGameList);
  };

  return (    
    <section className="header">
      <div id="menu" className="header-title" onClick={handleMouseEnter}>
        <img className="title-element" src={logoMenu} alt="Circle SVG" />
      </div>
      <div className="header-title">
        {
          !user.isLogin
          ?
            <Link to='/login'>
              <h4 id="login">Login</h4>
              {console.log('LOGin menu')}
            </Link>
          :
            <Link>
              <h4 onClick={() => {
                user.isLogin = !user.isLogin;
                user.moves = []
                user.name = '';
                user.gameStatus = 'in progress';
                navigate('/');
                console.log('user after LOGOUT', user)
              }} id="login">Logout</h4>
            </Link>
        }
      </div>
    </section>
  )
}
export default Header
