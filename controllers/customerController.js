const Customer = require('./../models/Customer')
<<<<<<< HEAD
// Hello
=======

>>>>>>> 182a4f1aeec8260b62da65727ae80b81d9188e07
const customerController = {
    test: async (req,res) => {
        try {
            res.json(req.body)
            console.log(req.body)
        } catch(e) {
            res.json(e)
        }
    },
    createCustomer: async (req,res) => {
        try {
            const customer = await Customer.create(req.body)
            res.json(customer)
            console.log(customer)
        } catch(e) {
            res.json(e)
        }
    },
    getCustomer: async (req,res) => {
        try {
            const customers = await Customer.find()
            res.json(customers)
            console.log(customers)
        } catch(e) {
            res.json(e)
        }
    }
}

module.exports = customerController