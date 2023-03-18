import express from "express";
import mongoose from "mongoose";
import cors from 'cors'
import dotenv from 'dotenv'

import menuRoutes from './routes/menu.js'
import customerRoutes from './routes/customers.js'
import payRoutes from './routes/payment.js'
import orderRoutes from './routes/order.js'

const app = express();
dotenv.config();

app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.get('/', (req, res) => {
    res.send("You succeeded")
})

app.use('/menu', menuRoutes)
app.use('/customer', customerRoutes)
app.use('/payment', payRoutes)
app.use('/order', orderRoutes)

const PORT = process.env.PORT || 5000

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))