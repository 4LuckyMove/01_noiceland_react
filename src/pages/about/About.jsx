import React from 'react';

import { dataAbout } from '../../data/dummy';
import './about.scss';

const About = () => {
  return (
    <div className='about'>
      <div className="about__container container">
        <div className="about__header header-page">
          <h1>About</h1>
        </div>
        <div className="about__content">
          {dataAbout.map((employee) => (
            <div className="about__card card" key={employee.fullname}>
              <div className="card__title">
                <img src={employee.avatar} alt={employee.fullname} className="card__img" />
              </div>
              <div className="card__body">
                <h1 className="card__name">{employee.fullname}</h1>
                <p className="card__description">{employee.profession}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About