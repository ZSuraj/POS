import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../../actions/menu'
import moment from 'moment'
import './KOT.css'

const KOT = ({show, onClose}) => {

    const customer = useSelector(state => state.customerReducer)
    const cart = useSelector(state => state.cartReducer)
    console.log(customer)
    const tax = cart.totalPrice * 0.05;

    // if (!show) {
    //     return null
    // }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const func = () => {
        dispatch(clearCart())
        navigate('/')
    }

  return (
    <div className='kot-container' onClick={() => {onClose(); func();}}>
        <div className='kot-content-container' onClick={(e) => {e.stopPropagation()}}>
            <div className='restaurant-name-container'>
                <h2>Restaurant Name</h2>
            </div>
            <div className='restaurant-details-container'>
                <div className='restaurant-details-container-1'>
                    <p className='p'>Somthing</p>
                    <p className='p'>Address</p>
                    <p className='p'>Street</p>
                    <p className='p'>Phone:12234534,123434</p>
                </div>
                <div className='restaurant-details-container-2'>
                    <div className='date-container'>
                        <p className='p p-b'>Date: </p>
                        <p className='p'>{moment(customer.data.orderDate).format('DD-MM-YYYY')}</p>
                    </div>
                    <div className='invoice-container'>
                        <p className='p p-b'>Invoice: </p>
                        <p className='p'>#123</p>
                    </div>
                </div>
            </div>
            <div className='customer-details-container'>
                <div className='customer-details-container-1'>
                    <p className='p p-b'>BILL TO:</p>
                    <div className='customer-name-container'>
                        <p className='p p-b'>Name: </p>
                        <p className='p'>{customer.data.name}</p>
                    </div>
                    <div className='customer-email-container'>
                        <p className='p p-b'>Customer email: </p>
                        <p className='p'>{customer.data.email}</p>
                    </div>
                </div>
                <div className='customer-details-container-2'>
                <div className='time-container'>
                        <p className='p p-b'>Time: </p>
                        <p className='p'>{moment(customer.data.orderDate).format('HH:mm')}</p>
                    </div>
                    <div className='orderNo-container'>
                        <p className='p p-b'>Order no: </p>
                        <p className='p'>#123</p>
                    </div>
                </div>
            </div>
            <table className='kot-table'>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Rate</th>
                    <th>Amount</th>
                </tr>
                {
                    cart.items.map((item) => (
                        <tr>
                            <td>{item.itemName}</td>
                            <td>{item.itemNos}</td>
                            <td>{item.itemPrice}</td>
                            <td>{item.itemNos * item.itemPrice}</td>
                        </tr>
                    ))
                }
            </table>
            <div className='total-price-container'>
                <div className='total-price-container-1'>
                    <div className='subtotal-container'>
                        <p className='p p-b'>Subtotal: </p>
                        <p className='p'>{cart.totalPrice}</p>
                    </div>
                    <div className='tax-rate-container'>
                        <p className='p p-b'>Tax rate: </p>
                        <p className='p'>5%</p>
                    </div>
                    <div className='tax-container'>
                        <p className='p p-b'>Tax: </p>
                        <p className='p'>{tax}</p>
                    </div>
                    <div className='total-container'>
                        <p className='p p-b'>TOTAL: </p>
                        <p className='p'>{cart.totalPrice+tax}</p>
                    </div>
                </div>
            </div>
            <div className='status-container'>
                <p className='p p-b'>Status: </p>
                <p className='p'>{customer.data.paymentId}</p>
            </div>
            <div className='thank-note-container'>
                <p className='p'>Please Contact us for any queries related to invoice</p>
                <p className='p'>Thank you for your visit.</p>
            </div>
            <p className='p print-invoice-btn' onClick={() => window.print()}>Print Invoice</p>
        </div>
    </div>
  )
}

export default KOT