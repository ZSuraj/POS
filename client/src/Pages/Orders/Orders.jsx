import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllOrders } from '../../actions/allOrders'

import Order from './Order'
import './Orders.css'

const Orders = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllOrders())
  }, [dispatch])

  const order = useSelector(state=> state.allOrderReducer)

  return (
    <div className='orders-list-container'>
       <table className='order-table'>
      <thead>
        <tr>
          <th>Sl.No</th>
          <th>Name</th>
          <th>Table</th>
          <th>Items</th>
          <th>Time</th>
          <th>Order-id</th>
          <th>Status</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
      {
          order?.data?.map((order, index) => (
              <Order order={order} key={order._id} index={index}/>
          ))
      }
      </tbody>
      </table>
    </div>
  )
}

export default Orders