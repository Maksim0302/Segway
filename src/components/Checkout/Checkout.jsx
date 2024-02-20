import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const cartitems = useSelector(state => state.cart.cart)
  return (
    <div>
        <h2>Cart Items</h2>
        {
            cartitems.map(item => {
                return (
                    <div className="d-flex">
                        <img src={item.imgUrl} alt=''/>
                        <div className="">
                            <h4>{item.title}</h4>
                            <button className='btn btn-warning btn-sm'>Remove</button>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Checkout