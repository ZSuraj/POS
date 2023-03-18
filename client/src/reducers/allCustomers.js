const allCustomerReducer = (state={data:null}, action) => {
    switch (action.type) {
        case 'FETCH_ALL_CUSTOMERS':
            return {...state, data: action.data}
        default:
            return state
    }
}

export default allCustomerReducer