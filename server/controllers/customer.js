import customers from "../models/customer.js"
import mongoose from "mongoose"

export const customerDetails = async(req, res) => {
    const {name, email, tableNumber} = req.body
    try {
        const newCustomer = await customers.create({ name, email, tableNumber })
        res.status(200).json(newCustomer)
    } catch (error) {
        res.status(500).json(error.message)
    }   
}

export const updateCustomer = async(req, res) => {
    const {custId,paymentId,orderId} = req.body

    if(!mongoose.Types.ObjectId.isValid(custId)){
        return res.status(404).send('profile unavailable...');
    }

    try {
        const updatedCustomer = await customers.findByIdAndUpdate( custId, { $set: { 'paymentId': paymentId, 'orderId': orderId }}, { new: true } )
        res.status(200).json(updatedCustomer)
    } catch (error) {
        console.log(1)
        res.status(500).json(error.message)
    }   
}

export const getAllCustomers = async (req, res) => {
    try {
        const allCustomers = await customers.find()
        res.status(200).json(allCustomers);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const removeCustomer = async (req, res) => {
    const { id:_id } = req.params ;

    if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('customer unavailable...');
    }

    try {
        await customers.findByIdAndRemove( _id );
        res.status(200).json({ message: "successfully deleted..."})
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}