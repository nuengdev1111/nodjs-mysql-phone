
const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
// const product = require('./routers/product')
// const auth = require('./routers/auth')
const { readdirSync } = require('fs')


app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

// app.use('/api',product)
// app.use('/api',auth)
readdirSync('./routers')
.map((c)=> app.use('/api', require('./routers/'+c)))


app.listen(5000,()=> 
    console.log('Server is Running on port 5000'))