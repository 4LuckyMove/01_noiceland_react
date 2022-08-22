import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

import './modal.scss';

const Modal = ({ open, isOpen, title, category, author, image, description }) => {
  return (
    <div
      className={open.isShow ? 'modal modal_active' : 'modal'}
      onClick={() => isOpen({postId: '', isShow: false})}
    >
      <div
        className={open.isShow ? "modal__container modal__container_active" : "modal__container"}
        onClick={e => e.stopPropagation()}
      >
        <div className="modal__header">
          <h1 className='modal__title'>{title}</h1>
          <span className='modal__icon-close'>
            <AiOutlineCloseCircle
              className='modal__icon'
              onClick={() => isOpen({postId: '', isShow: false})}
            />
          </span>
        </div>
        <div className="modal__content">
          <div className="modal__category-and-author">
            <p className="modal__category">{category}</p>
            <p className="modal__author">By {author}</p>
          </div>
          <div className="modal__body-img">
            <img src={image} alt={title} className='modal__img' />
          </div>
          <p className="modal__description">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default Modal