const paymentReducer = (state= {data:null}, action) => {
    switch (action.type) {
        case 'PAYMENT':
            return {...state, data: action.payload}
        default:
            return state
    }
}

export default paymentReducer