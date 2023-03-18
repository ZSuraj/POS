import orders from '../models/order.js'
import mongoose from 'mongoose';

export const getAllOrders = async (req, res) => {
    try {
        const allOrders = await orders.find()
        res.status(200).json(allOrders);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const writeTheOrder = async (req, res) => {
    const {Name: name, tableNo: tableNumber, totalQuantity: items, orderID: orderId} = req.body;
    try {
        const newOrder = await orders.create({ name, tableNumber, items, orderId })
        res.status(200).json(newOrder)
    } catch (error) {
        res.status(500).json(error.message)
    } 
}

export const removeOrder = async (req, res) => {
    const { id:_id } = req.params ;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('order unavailable...');
    }

    try {
        await orders.findByIdAndRemove( _id );
        res.status(200).json({ message: "successfully deleted..."})
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}