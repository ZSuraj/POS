import * as api from '../api'
import { fetchAllCustomers } from './allCustomers'

export const Tcustomer = (custdata, navigate) => async(dispatch) => {
    try {
        const {data} = await api.getCustomer(custdata)
        dispatch({ type: 'CUSTOMER', data })
        navigate('/menu/starter')
    } catch (error) {
        console.log(error)
    }
}

export const updateCustomer = (custId, paymentId, orderId) => async(dispatch) => {
    try {
        const {data} = await api.updateCustomer(custId, paymentId, orderId)
        dispatch({ type: 'UPDATE_CUSTOMER', data })
    } catch (error) {
        console.log(error)
    }
}


export const removeCustomer = (id) => async (dispatch) => {
    try {
        await api.removeCustomer(id)
        dispatch(fetchAllCustomers())
    } catch (error) {
        console.log(error)
    }
}