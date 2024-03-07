import React from 'react';
import { Link } from 'react-router-dom';
import logoMenu from '../components/lines_menu_burger_icon_123889.svg';

const Header = ({online, onMenuClick, onLoginClick}) => {

  return (    
    <section className="header">
      <div id="menu" className="header-title" onClick={onMenuClick}>
        <img className="title-element" src={logoMenu} alt="Circle SVG" />
      </div>
      <div className='header-title'>  
        <h4 id="login" onClick={onLoginClick}>
          <Link>{online? `Logout` : `Login`}</Link>
        </h4>
      </div>
    </section>
  )
}
export default Header
