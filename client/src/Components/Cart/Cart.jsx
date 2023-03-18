import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-regular-svg-icons'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { handleCart } from '../../actions/menu'

const Cart = ({item}) => {
  
    const [counter, setCounter] = useState(1)
    const dispatch = useDispatch()

    const increment = () => {
        setCounter(counter + 1)
        dispatch(handleCart(item, counter+1, 'plus'))
    }

    const decrement = () => {
        if (counter < 1) {
            return null
        }
        setCounter(counter - 1)
        dispatch(handleCart(item, counter-1, 'minus'))
    }

  return (
    <div className='item-container'>
        <div className='item-price-container'>
            <h6 className='item'>{item.itemName}</h6>
            <p className='price'>{item.itemPrice}</p>
        </div>
        <div className='icons-container'>
          <FontAwesomeIcon icon={faMinusSquare} className='minus'onClick={decrement}/>
          <p className='nos'>{item.itemNos}</p>
          <FontAwesomeIcon icon={faPlusSquare} className='plus' onClick={increment}/>
        </div>
    </div>
  )
}

export default Cart