const express = require('express')
require('dotenv').config()
const port = process.env.PORT || 4000
const app = express()
const authApi = require('./api/authApi')

// connecting to db
const dbConnect = require('./config/dbConnet')
dbConnect()

const User = require('./models/user') 

//routes
app.get("/", (req, res)=>{
    res.send("MERN authentication jwt")
})

app.use(express.json())

//Apis
app.use('/api/auth', authApi)


app.listen(port, ()=>console.log(`Listning on port ${port}`))
// console.log(process.env.PORT) 


