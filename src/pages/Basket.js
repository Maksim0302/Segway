import React, { useContext } from 'react';
import Navbar from '../components/BascetComponent/Navbar';
import { StoreContext } from '../context-and-reducer/StoreContext';
import BasketProduct from '../components/BascetComponent/BasketProduct';
import { Link } from 'react-router-dom';
import { ImArrowLeft } from "react-icons/im";


const Basket = () => {
  const {products, total} = useContext(StoreContext)
  return (
    <div className='basket'>
      <div className='basket__item'>
            <Link to="/" className='basket__item-arrow'><ImArrowLeft /></Link>
            <Navbar/>
      </div>
      <div className='basket__text'>
        <h3 className='basket__text__name'>Your Basket</h3>
        <div className='basket__text__price'>
          <h4 className='basket__text__price-total'>Total:</h4>
          <p className='basket__text__price-sum'>${total.toFixed(2)}</p>
        </div>
      </div>
      <div className='basket__content'>
      {products.map((product, i) =>
        <BasketProduct
          key={i}
          item={product}
        />
      )}
      </div>
    </div>
  )
}

export default Basket;