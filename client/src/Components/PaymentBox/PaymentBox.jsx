import React, { useState } from 'react'

import './PaymentBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan, faPenToSquare } from '@fortawesome/free-regular-svg-icons'
import { faCartShopping, faL } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../../actions/menu'
import { razorPayment } from '../../actions/payment'
import { updateCustomer } from '../../actions/customer'
import { writeorder } from '../../actions/order'
import { useNavigate } from 'react-router-dom'
import { Alert } from '../Alert/Alert'
import KOT from '../KOTmodal/KOT'

const Payment = () => {

  const cart = useSelector(state => state.cartReducer)
  const [alert, setAlert] = useState(false)
  const [showKot, setShowKot] = useState(false)
  const customer = useSelector(state => state.customerReducer)
  const pay = useSelector(state => state.paymentReducer)
  const tax = cart.totalPrice * 0.05

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  const amount = cart.totalPrice + tax
  const [paidThrough, setPaidThrough] = useState("")
  const [paymentId, setPaymentId] = useState("")

  const handlePay = () => {

      var options = {
        key: process.env.REACT_APP_RAZORPAY_API_KEY,
        key_secret: process.env.REACT_APP_RAZORPAY_SECRET_KEY,
        amount: amount*100,
        currency:"INR",
        name:"Food Bill",
        // order_id: payOrderId,
        description:"Test Transaction",
        handler: function(response){
          setPaymentId(response.razorpay_payment_id)
        },
        prefill: {
          name: "suraj",
          email: "sR@g.com",
          contact: "9551110707"
        },
        notes:{
          address: "Razorpay Corporate office"
        },
        theme: {
          color: "#d66616",
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
      dispatch(razorPayment({amount}))
      setPaidThrough("razor")
  }

  const handleCashPay = () => {
    setAlert(true)
    setPaidThrough("cash")
    setPaymentId("Cash Payment")
  }

  let newOrderId;

  const handleOrder = () => {
    if (paidThrough === "cash") {
      newOrderId = "Cash Payment"
    }else{
      newOrderId = pay.data.id
    }
    dispatch(updateCustomer(customer.data._id, paymentId, newOrderId))
    dispatch(writeorder(customer.data.name, customer.data.tableNumber, cart.totalQuantities, newOrderId, navigate))
  }

  return (
    <div className='paymentBox-container'>
      <div className='top-box-container'>
        <div className='table-cust-container'>
          <h6 style={{margin:"0px"}}>Table {customer?.data?.tableNumber}</h6>
          <p style={{margin:"0px"}}>{customer?.data?.name}</p>
        </div>
        <div className='top-box-icons-container'>
          <FontAwesomeIcon icon={faTrashCan} className='top-box-icon' onClick={handleClearCart}/>
        </div>
      </div> 
      <div className='middle-cart-container'>
        {
          cart.items.length === 0 ?
          <FontAwesomeIcon icon={faCartShopping} className='cart-icon'/> :
          cart.items.map((item) => (
            <Cart item={item}/>
          ))
        }
      </div>
      <div className='pay-box'>
        {/* <button className='pay-box-btn'>Discount</button> */}
        <button className='pay-box-btn' onClick={handleCashPay}>Cash</button>
        <button className='pay-box-btn' onClick={handlePay}>UPI</button>
      </div>
      <div className='pay-details'>
        <div className='tax'>
          <p>TAX</p>
          <p>{tax}</p>
        </div>
        <div className='subtotal'>
          <p>Subtotal</p>
          <p>{cart.totalPrice}</p>
        </div>
        <div className='total'>
          <p>TOTAL</p>
          <p>{cart.totalPrice+tax}</p>
        </div>
      </div>
      <div className='kot-place-box'>
        <button className='kp-button' onClick={() => setShowKot(true)}>KOT</button>
        <button className='kp-button' onClick={handleOrder}>Place Order</button>
      </div>
      {
        alert && <Alert close={() => setAlert(false)}/> 
      }

      {
        showKot && <KOT onClose={() => setShowKot(false)}/>
      }
    </div>
  )
}

export default Payment