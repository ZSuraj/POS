import React from 'react'
import { useDispatch } from 'react-redux'
import { removeCustomer } from '../../actions/customer'
import moment from 'moment'

const Customer = ({order, index}) => {

  const dispatch = useDispatch()

  const handleRemove = () => {
    dispatch(removeCustomer(order._id))
  }
  
  return (
        <tr className='order-container'>
          <td>{index}</td>
          <td>{order.name}</td>
          <td>{order.email}</td>
          <td>{order.paymentId}</td>
          <td>{order.orderId}</td>
          <td>{moment(order.orderDate).format('DD-MM-YYYY')}</td>
          <td onClick={handleRemove} className='remove-btn'>Remove</td>
        </tr>
  )
}

export default Customer