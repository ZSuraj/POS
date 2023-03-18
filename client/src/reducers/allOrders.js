const allOrderReducer = (state={data:null}, action) => {
    switch (action.type) {
        case 'FETCH_ALL_ORDERS':
            return {...state, data: action.data}
        default:
            return state
    }
}

export default allOrderReducer