import React, { useContext, useState, useEffect } from 'react';
import { StoreContext } from '../../context-and-reducer/StoreContext';

const Product = ({ item }) => {
  const { addToBasket, removeFromBasket, basket } = useContext(StoreContext);
  const [isInBasket, setIsInBasket] = useState(false);

  useEffect(() => {
    if (Array.isArray(basket) && basket.length > 0) {
      const found = basket.find(product => product.id === item.id);
      setIsInBasket(!!found);
    }
  }, [basket, item.id]);

  const handleAddToCart = () => {
    addToBasket(item);
    setIsInBasket(true);
  }

  const handleRemoveFromCart = () => {
    removeFromBasket(item);
    setIsInBasket(false);
  }

  return (
    <>
      <div className="cards__item">
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
            {isInBasket ? (
              <button onClick={handleRemoveFromCart} className='accessories__cart__btn accessories__cart__btn_remove'>REMOVE FROM CART</button>
            ) : (
              <button onClick={handleAddToCart} className='accessories__cart__btn__add'>ADD TO CART</button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Product;
