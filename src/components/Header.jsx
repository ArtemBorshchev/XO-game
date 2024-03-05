import React from 'react';
import logoMenu from '../components/lines_menu_burger_icon_123889.svg';

const Header = ({handleMouseEnter, handleMouseEnter2, isLogin, setIsLogin = () => {}, online, setOnline = () => {}}) => {

  return (    
    <section className="header">
      <div id="menu" className="header-title" onClick={handleMouseEnter}>
        <img className="title-element" src={logoMenu} alt="Circle SVG" />
      </div>
      <div className='header-title'>  
        <h4 id="login" onClick={handleMouseEnter2}>
          {online? `Logout` : `Login`}
        </h4>
      </div>
    </section>
  )
}
export default Header
