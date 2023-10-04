import React from 'react';
import { Link } from 'react-router-dom';

import Search from './search';

function Header({ searchValue, setSearchValue }) {
  return (
    <div className='Header'>
      <Link to='/'>
        <img src='img/logo.png' alt='logo' className='logo' />
      </Link>
      <h2 className='header__title'>CREATURE HIRING</h2>
      <Search searchValue={searchValue} setSearchValue={setSearchValue} />
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
