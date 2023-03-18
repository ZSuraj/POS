import express  from "express";

import { comPayment } from "../controllers/payment.js";

const router = express.Router();

router.post('/order', comPayment)

export default router