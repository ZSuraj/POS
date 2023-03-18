import * as api from '../api'

export const razorPayment = (amount) => async(dispatch) => {
    try {
        const {data} = await api.getPayData(amount)
        dispatch({ type: 'PAYMENT', payload: data})
        // console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}