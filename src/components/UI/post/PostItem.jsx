import React from 'react';

import './postItem.scss';

const PostItem = ({ id, image, category, title, description, author, openModal }) => {
  return (
    <div
      className='post-item'
      onClick={openModal}
    >
        <div className="post-item__card card">
            <div className="card__title">
                <img src={image} alt={title} className="card__img" />
            </div>
            <div className="card__body">
                <p className="card__category">{category}</p>
                <h1 className='card__name'>{title}</h1>
                <p className="card__description">{description}</p>
                <p className="card__author">{author}</p>
            </div>
        </div>
    </div>
  )
}

export default PostItem