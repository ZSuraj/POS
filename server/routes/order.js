import express  from "express";

import { getAllOrders, writeTheOrder, removeOrder } from "../controllers/order.js";

const router = express.Router();

// router.post('/update', updateCustomer)
router.get('/getall', getAllOrders)
router.post('/write', writeTheOrder)
router.delete('/remove/:id', removeOrder)

export default router