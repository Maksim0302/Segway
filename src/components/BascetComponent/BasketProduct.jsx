import React, { useContext } from 'react';
import { StoreContext } from '../../context-and-reducer/StoreContext';

const BasketProduct = ({item}) => {
    const {removeFromBasket} = useContext(StoreContext);
    const handleRemove = () => {
        removeFromBasket(item);
    }
  return (
      <div className="accessories__content cards">
        <div className=" cards__item">
            <div className="accessories__cart">
              <div className="accessories__cart__image">
                  <img src={item.imgUrl} alt="" />
              </div>
              <div className="accessories__cart__box">
                  <div className="accessories__cart__title">
                      {item.title}
                  </div>
                  <div className="accessories__cart__description">
                      {item.description}
                  </div>
                  <div className="accessories__cart__price">
                      <div className="accessories__cart__price__text">
                          <span>Price</span>
                      </div>
                      <span>${item.price.toFixed(2)}</span>
                  </div>
              </div>
              <div className="accessories__cart__btn">
                  <button onClick={handleRemove} className='accessories__cart__btn__add'>Remove</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default BasketProduct;