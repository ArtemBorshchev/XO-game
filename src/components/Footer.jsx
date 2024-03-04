import React from 'react';
import { Link } from 'react-router-dom';
import gitHubLogo from '../components/iconmonstr-github-1.svg';

export const Footer = () => {
  return (
    <section className="footer">
    <div className="footer-title">
      <h4 className="title-element">Developed by Artem Borshchev</h4>
    </div>
    <div className="footer-title">
      <Link to='https://github.com/ArtemBorshchev'>
        <img className="title-element" src={gitHubLogo} alt="Circle SVG" width="50" height="50" />
      </Link>
    </div>
  </section>
  )
}

export default Footer