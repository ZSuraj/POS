import * as api from '../api'
import { fetchAllOrders } from './allOrders'
import { clearCart } from './menu'

export const writeorder = (Name, tableNo, totalQuantity, orderID, navigate) => async(dispatch) => {
    try {
        const {data} = await api.writeOrder(Name, tableNo, totalQuantity, orderID)
        dispatch({ type: 'ORDER', data })
    } catch (error) {
        console.log(error)
    }
}

export const removeOrder = (id) => async (dispatch) => {
    try {
        await api.removeOrder(id)
        dispatch(fetchAllOrders())
    } catch (error) {
        console.log(error)
    }
}