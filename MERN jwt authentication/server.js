const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 5000
const app = express()

// connecting to db
const dbConnect = require('./config/dbConnet')
dbConnect()


app.listen(port, ()=>console.log(`Listning on port ${port}`))
// console.log(process.env.PORT) 


