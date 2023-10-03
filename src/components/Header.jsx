import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='Header'>
      <Link to='/'>
        <img src='img/logo.png' className='logo' />
      </Link>
      <h1 className='header__title'>CREATURE HIRING</h1>
      <nav className='menu'>
        <Link to='/cart'>
          <span className='menu__item'>Cart</span>
        </Link>
        <Link to='/profile'>
          <span className='menu__item'>Profile</span>
        </Link>
      </nav>
    </div>
  );
}

export default Header;
