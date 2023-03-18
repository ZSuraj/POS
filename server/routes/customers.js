import express  from "express";

import { customerDetails, getAllCustomers, updateCustomer, removeCustomer } from "../controllers/customer.js";

const router = express.Router();

router.post('/get', customerDetails)
router.post('/update', updateCustomer)
router.get('/getall', getAllCustomers)
router.delete('/remove/:id', removeCustomer)

export default router