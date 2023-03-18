import * as api from '../api'

export const fetchAllCustomers = () => async (dispatch) => {
    try {
        const { data } = await api.getAllCustomers()
        dispatch({ type: 'FETCH_ALL_CUSTOMERS', data})
    } catch (error) {
        console.log(error)
    }
}