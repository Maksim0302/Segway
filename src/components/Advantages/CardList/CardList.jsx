import React, { useState } from 'react';
import Card from '../Card/Card';
import './CardList.scss'

const CardList = ({ cards }) => {
    const [activeCategoryId, setActiveCategoryId] = useState(cards[0].id);
    const handleFilterChange = (categoryId) => {
      setActiveCategoryId(categoryId);
    };
    const filteredCards = cards.filter((card) => card.categoryId === activeCategoryId);
  
    return (
      <div className='advance'>
        <div className="advance__button-container button-container">
          {cards.map((card) => (
            <button
              key={card.id}
              className={activeCategoryId === card.id ? 'active' : ''}
              onClick={() => handleFilterChange(card.id)}
            >
              <div className="button__content">
                <img src={card.icon} alt={`Category ${card.title}`} />
                <span className='button__content__text'>{card.title}</span>
              </div>
            </button>
          ))}
        </div>
        <div className="advance__card-list card-list">
          {filteredCards.map((card) => (
            <Card key={card.id} title ={card.title} description={card.description} image={card.image} />
          ))}
        </div>
      </div>
    );
  };
  
export default CardList;