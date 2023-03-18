import Razorpay from 'razorpay'
import shortid from 'shortid'

const instance = new Razorpay({
    key_id: 'rzp_test_hIAiNtkxGwTwsh',
    key_secret: 'MpeJJ4NwAVy6AV0HUkr7x8iX',
});

export const comPayment = async(req, res) => {

    const {amount: a} = req.body;

    try {

        const payment_capture =1
        const currency = 'INR'

        const options = {
            amount: a * 100,
            currency,
            receipt: shortid.generate(),
            payment_capture
        }

        const response = await instance.orders.create(options)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error)
    }
}
