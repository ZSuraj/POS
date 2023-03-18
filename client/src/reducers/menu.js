const menuReducer = (state= {data:null}, action) => {
    switch (action.type) {
        case 'FETCH_FULL_MENU':
            return {...state, data: action.payload}
        default:
            return state
    }
}

export default menuReducer