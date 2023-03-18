import * as api from '../api' 

export const FullMenu = () => async(dispatch) => {
    try {
        const {data} = await api.getFullMenu()
        dispatch({ type: 'FETCH_FULL_MENU', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const handleCart = (product, quantity, signal) => async(dispatch) => {
    try {
        // const {foodItem} = await api.itemCart(id)
        dispatch({ type: 'ADD_TO_CART', payload: {product, quantity}})
    } catch (error) {
        console.log(error.message)
    }
}

export const clearCart = () => async(dispatch) => {
    try {
        dispatch({ type: 'CLEAR_CART', payload: [] })
    } catch (error) {
        console.log(error)
    }
  }