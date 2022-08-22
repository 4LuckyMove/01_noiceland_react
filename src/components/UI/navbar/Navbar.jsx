import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineLogin } from "react-icons/ai";

import { dataNavLinks } from '../../../data/dummy';
import './navbar.scss';

const Navbar = ({ isActive }) => {
  return (
    <nav className={isActive ? 'navbar navbar_active' : 'navbar'}>
      <ul className="navbar__items">
        {dataNavLinks.map((link) => (
          <li className="navbar__item" key={link.name}>
            <NavLink to={link.link} className='navbar__link'>
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar