import mongoose from "mongoose";

const menuSchema = mongoose.Schema({
    itemName: {type: String, required: true},
    itemPrice: {type: Number, required: true},
    itemType: {type: String, required: true},
    itemNos: {type: Number, required: true},
})

export default mongoose.model("Menu", menuSchema)