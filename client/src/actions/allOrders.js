import * as api from '../api'

export const fetchAllOrders = () => async (dispatch) => {
    try {
        const { data } = await api.getAllOrders()
        dispatch({ type: 'FETCH_ALL_ORDERS', data})
    } catch (error) {
        console.log(error)
    }
}