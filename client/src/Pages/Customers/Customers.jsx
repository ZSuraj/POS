import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCustomers } from '../../actions/allCustomers'

import Customer from './Customer'
import './Customers.css'

const Customers = () => {

  const dispatch = useDispatch()
  let counter = 0;

  useEffect(() => {
    dispatch(fetchAllCustomers())
  }, [dispatch])
  
  const customer = useSelector(state => state.allCustomerReducer)

  return (
    <div className='orders-list-container'>
      <table className='customer-table'>
      <thead>
        <tr>
          <th>Sl.No</th>
          <th>Name</th>
          <th>Email</th>
          <th>Payment-id</th>
          <th>Order-id</th>
          <th>Date</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {
          customer?.data?.map((order, index) => (
            (order.paymentId && order.orderId) && 
            (
              <>
                <span style={{display:"none"}}>{counter++}</span>
                <Customer order={order} key={order._id} index={counter}/>
              </>
            )
          ))
      }
        </tbody>
      </table>
    </div>
  )
}

export default Customers