import React from 'react';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/pagination';
import './slider.scss';

const Slider = ({ slides }) => {
  return (
    <div className='slider'>
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{delay: 5000}}
          slidesPerView={1}
          pagination={{clickable: true}}
          className='slider__swiper'
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slider__card card">
                <div className="card__title">
                  <img src={slide.image} alt={slide.title} className="card__img" />
                </div>
                <div className="card__body">
                  <p className="card__category">{slide.category}</p>
                  <h1 className='card__name-slider'>{slide.title}</h1>
                  <p className="card__description">{slide.description}</p>
                  <p className="card__author">By {slide.author}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

    </div>
  )
}

export default Slider