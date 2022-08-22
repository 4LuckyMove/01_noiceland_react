import React from 'react';

import './contact.scss';

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact__container container">
        <div className="contact__header header-page">
          <h1>Contact</h1>
        </div>
        <div className="contact__content">
          <form>
            <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder='Name' />
            </div>
            <div className="input-group">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" placeholder='Last Name' />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder='Email' />
            </div>
            <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" placeholder='Message...'></textarea>
            </div>
            <div className="form-btn">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact