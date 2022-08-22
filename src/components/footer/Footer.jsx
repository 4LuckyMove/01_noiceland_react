import React from 'react';
import { Link } from 'react-router-dom';

import { useStateContext } from '../../context/ContextProvider';
import { dataFooterCategories } from '../../data/dummy';
import './footer.scss';

const Footer = () => {
  const {setCategory} = useStateContext();

  return (
    <footer className='footer'>
      <div className="footer__container container">
        <div className="footer__header">
          <div className="footer__logo">
            <Link to="/" className='footer__logo-link'>
              NoiceLand
            </Link>
          </div>
          <div className="footer__copy">
            <p>&copy; 2022 Noiceland&trade;, All Rights Reserved</p>
          </div>
        </div>
        <div className="footer__body">
          <div className="footer__menu-top">
            <div className="footer__categories footer__menu">
              <div className="footer__title">
                <h1>Categories</h1>
              </div>
              <div className="footer__content">
                {dataFooterCategories.map((category) => (
                  <Link
                    key={category.name}
                    to={category.link}
                    onClick={e => setCategory({filter: e.target.dataset.filter})}
                    data-filter={category.name}
                    className='footer__link'
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="footer__subscribe footer__menu">
              <div className="footer__title">
                <h1>Subscribe To Newsletter</h1>
              </div>
              <div className="footer__content">
                <form>
                  <div className="input-group">
                    <input type="email" placeholder='Email Address'/>
                    <button type='sumbit'>Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="footer__menu-bottom">
            <div className="footer__information footer__menu">
              <div className="footer__title">
                <h1>Information</h1>
              </div>
              <div className="footer__content">
                <Link to="/about" className='footer__link'>about</Link>
                <Link to="/contact" className='footer__link'>contact</Link>
                <Link to="/terms" className='footer__link'>terms</Link>
              </div>
            </div>
            <div className="footer__follow-us footer__menu">
              <div className="footer__title">
                <h1>Follow Us</h1>
              </div>
              <div className="footer__content">
                <Link to="https://www.instagram.com/" className='footer__link'>instagram</Link>
                <Link to="https://www.facebook.com/" className='footer__link'>facebook</Link>
                <Link to="https://twitter.com/" className='footer__link'>twitter</Link>
              </div>
            </div>
            <div className="footer__template footer__menu">
              <div className="footer__title">
                <h1>Template</h1>
              </div>
              <div className="footer__content">
                <Link to="/image-license-info" className='footer__link'>Image License Info</Link>
                <Link to="https://webflow.com/" className='footer__link'>Powered by Webflow</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer