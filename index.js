//-----------------------------------------------------------------------
// Setup
//-----------------------------------------------------------------------
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');
const app = express()
const bodyParser = require('body-parser')
app.use(bodyParser.json())
const dotenv = require('dotenv') 
dotenv.config()
const customerController = require('./controllers/customerController')

//-----------------------------------------------------------------------
// Routes
//-----------------------------------------------------------------------
app.post('/customer', customerController.createCustomer)

app.post('/customer', customerController.test)

app.get('/customer', customerController.getCustomer)


//-----------------------------------------------------------------------
// DB connection
//-----------------------------------------------------------------------
const mongoURL = process.env.DB_HOST;
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.connection.on('connected', () => {
    console.log('DB connected success')
})
mongoose.connection.on('error', (err) => {
    console.log('error', err)
})
//-----------------------------------------------------------------------
// Port Connection
//-----------------------------------------------------------------------
const PORT = process.env.PORT || 5000
app.listen(PORT , ()=>{
    console.log('Server listening to port ' + PORT)
})
app.listen(process.env.DB_PORT , () =>{
    console.log('Server listening to port ' + process.env.DB_PORT)
})