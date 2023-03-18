import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000' })

export const getFullMenu = () => API.get('/menu/get');

export const getCustomer = (data) => API.post('/customer/get', data)
export const updateCustomer = (custId,paymentId,orderId) => API.post('/customer/update', {custId, paymentId, orderId})
export const getAllCustomers = () => API.get('/customer/getall')
export const removeCustomer = (id) => API.delete(`/customer/remove/${id}`)

export const getPayData = (amount) => API.post('/payment/order', amount)

export const getAllOrders = () => API.get('/order/getall')
export const writeOrder = (Name, tableNo, totalQuantity, orderID) => API.post('/order/write', {Name, tableNo, totalQuantity, orderID})
export const removeOrder = (id) => API.delete(`/order/remove/${id}`)