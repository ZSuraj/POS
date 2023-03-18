import mongoose from "mongoose";

const customerSchema = mongoose.Schema({
    name: {type: String, required:true},
    email: {type: String, required:true},
    tableNumber: {type: Number, required:true},
    paymentId: {type: String},
    orderId: {type: String},
    orderDate: {type: Date, default: Date.now},
}, {timestamps: true},);

export default mongoose.model("Customer", customerSchema)