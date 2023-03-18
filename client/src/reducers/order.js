const orderReducer = (state={data:null}, action) => {
    switch (action.type) {
        case 'ORDER':
            return {...state, data: action.data}
        default:
            return state
    }
}

export default orderReducer