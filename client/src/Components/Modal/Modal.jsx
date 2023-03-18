import React, { useState } from 'react'

import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { Tcustomer } from '../../actions/customer'
import './Modal.css'

const Modal = ({show, onClose, tableNumber}) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    if (!show) {
        return null
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!name) {
            alert("Enter name")
        }
        if (!email) {
            alert("Enter email")
        }
        dispatch(Tcustomer({name, email, tableNumber}, navigate))
    }

  return (
    <div className='modal-container' onClick={() => {onClose()}}>
        <div className='modal-container-content' onClick={(e) => {e.stopPropagation()}}>
            <div className='avatar'>
                <h3>A</h3>
            </div>
            <div className='customer-details'>
                <h6>Customer Details of Table n</h6>
            </div>
            <form className='form' onSubmit={handleSubmit}>
                <input type="text" name='name' id='name' placeholder='Name' onChange={(e) => {setName(e.target.value)}}/>
                <input type="email" name='email' id='email' placeholder='Email' onChange={(e) => {setEmail(e.target.value)}}/>
                <button type='submit' className='register-btn'>Register</button>
            </form>
        </div>
    </div>
            
  )
}

export default Modal