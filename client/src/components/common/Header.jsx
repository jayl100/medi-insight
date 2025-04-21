import React from 'react';
import mediLogo from '../../assets/logo.svg';

function Header() {
  return (
    <header className='App-header'>
      <a href="#">
        <img src={mediLogo} className="logo" alt="medi logo" />
      </a>
      <ul className='nav'>
        <li>
          <a href="">Hospitals</a>
        </li>
        <li>
          <a href="">Bookmark</a>
        </li>
        <li>
          <a href="">Logout</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;