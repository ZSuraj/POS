const customerReducer = (state={data:null}, action) => {
    switch (action.type) {
        case 'CUSTOMER':
            return {...state, data: action.data}
        case 'UPDATE_CUSTOMER':
            return {...state, data: action.data}
        default:
            return state
    }
}

export default customerReducer