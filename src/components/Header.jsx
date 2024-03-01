import React from 'react';
import { Link, useNavigate} from 'react-router-dom';
import logoMenu from '../components/lines_menu_burger_icon_123889.svg';
import user from '../usefullFunctions/user';

const Header = () => {
  const navigate = useNavigate();
  
  return (    
    <section className="header">
      <div id="menu">
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
                user.isLogin = !user.isLogin
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