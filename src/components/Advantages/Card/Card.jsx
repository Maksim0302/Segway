import React from 'react';
import './Card.scss'

const Card = ({ title, description, image }) => {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__content__text">
            <h3 className='card__title'>{title}</h3>
            <p className='card__description'>{description}</p>
        </div>
        <div className="card__content__image">
          <img className='card__image' src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default Card;
