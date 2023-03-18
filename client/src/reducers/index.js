import { combineReducers } from "redux";
import menuReducer from './menu.js'
import cartReducer from "./cart.js";
import customerReducer from "./customer.js"
import paymentReducer from "./payment.js"
import orderReducer from "./order.js";
import allCustomerReducer from './allCustomers.js'
import allOrderReducer from './allOrders'

export default combineReducers({
    menuReducer, cartReducer, customerReducer, paymentReducer, orderReducer, allCustomerReducer, allOrderReducer,
})