import React, { useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquarePlus, faSquareMinus } from '@fortawesome/free-regular-svg-icons'
import { handleCart } from '../../actions/menu'
import { useDispatch, useSelector } from 'react-redux'

const FoodBox = ({menu}) => {

    const cart = useSelector(state => state.cartReducer)
    const [counter, setCounter] = useState(0)
    const dispatch = useDispatch()

    const increment = () => {
        setCounter(counter + 1)
        dispatch(handleCart(menu, 1, 'plus'))
    }

    const decrement = () => {
        if (counter < 1) {
            return null
        }
        setCounter(counter - 1)
        dispatch(handleCart(menu, 1, 'minus'))
    }

  return (
            <div className='food-box'>
                <div className='food-details-container'>
                    <div className='order-kitchen-container'>
                        <p className='order-kit'>orders</p>
                        <p className='order-kit'>--</p>
                        <p className='order-kit'>Kitchen</p>
                    </div>
                    <div className='items-price-container'>
                        <h6 className='food-item'>{menu.itemName}</h6>
                        <p className='food-price'>₹{menu.itemPrice}</p>
                    </div>
                    <div className='quantity-container'>
                        <p className='plus-minus' onClick={increment}>Add to Cart</p>
                        {/* <FontAwesomeIcon icon={faSquareMinus} className='plus-minus'onClick={decrement}/>
                        {
                            cart.items.map((item) => {
                                cart.items.length != 0 &&
                                <p className='plus-minus'>{item.itemNos}</p> 
                    
                            })
                        }
                        <FontAwesomeIcon icon={faSquarePlus} className='plus-minus' onClick={increment}/> */}
                    </div>
                </div>
            </div>
  )
}

export default FoodBox