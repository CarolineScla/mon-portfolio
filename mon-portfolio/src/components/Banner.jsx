import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Banner.scss';

function Banner() {
  return (
    <nav className='banner'>
      <div className= 'Banner_logo'>
        <img src='/emoji.jpeg' alt='logo'/>
      </div>
      <div className= 'Banner_menu'>
      <NavLink to="/about">À Propos</NavLink>
      <NavLink to="/projects">Projets</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
}

export default Banner;
