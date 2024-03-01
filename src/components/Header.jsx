import React from 'react'
import { Link } from 'react-router-dom'
import logoMenu from '../components/lines_menu_burger_icon_123889.svg'

const Header = ({user}) => {
  console.log(user)
  return (
    <section className="header">
      <div id="menu">
        <img className="title-element" src={logoMenu} alt="Circle SVG" />
      </div>
      <div className="header-title">
        <Link to='/login'>
          <h4 id="login">Login</h4>
        </Link>
      </div>

    </section>
  )
}

export default Header