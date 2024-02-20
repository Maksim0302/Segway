import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../context-and-reducer/StoreContext';
import { HiShoppingCart } from 'react-icons/hi';

const Home = () => {
  const {products} = useContext(StoreContext);
  return (
         <div className='basket-icon'>
            <Link to="/basket" ><HiShoppingCart className='nav__icons__cart nav-icon'/>
              <span className='basket-icon__number'>{products.length}</span>
            </Link>
        </div>
   
  )
}

export default Home