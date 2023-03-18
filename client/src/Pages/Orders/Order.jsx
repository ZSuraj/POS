import React from 'react'
import { useDispatch } from 'react-redux'
import { removeOrder } from '../../actions/order'
import moment from 'moment'

const Order = ({order, index}) => {

  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeOrder(order._id))
  }

  return (
        <tr className='order-container'>
          <td>{index+1}</td>
          <td>{order.name}</td>
          <td>{order.tableNumber}</td>
          <td>{order.items}</td>
          <td>{moment(order.createdAt).format('HH:mm')}</td>
          <td>{order.orderId}</td>
          <td>Sent to Kitchen</td>
          <td onClick={handleRemove} className='remove-btn'>Remove</td>
        </tr>
  )
}

export default Order