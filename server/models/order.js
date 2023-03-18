import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    name: {type: String, required:true},
    tableNumber: {type: Number, required:true},
    items: {type:Number, requires:true},
    orderId: {type: String, required:true},
    orderDate: {type: Date, default: Date.now},
}, {timestamps: true},);

export default mongoose.model("Order", orderSchema)