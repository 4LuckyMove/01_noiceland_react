import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from '../../components';
import { useStateContext } from "../../context/ContextProvider";
import './header.scss';

const Header = () => {
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <header className='header'>
      <div className="container header__container">
        <div className='header__logo'>
          <Link to="/" className='header__logolink'>
            NoiceLand
          </Link>
        </div>
        <div
          className={activeMenu ? 'header__btn-burger header__btn-burger_active' : 'header__btn-burger'}
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <span></span>
        </div>
        <Navbar isActive={activeMenu} />
      </div>
    </header>
  )
}

export default Header