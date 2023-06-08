
const connectToMonggo=  require('./db')
require("dotenv").config();
const express = require('express')
var cors = require('cors')

connectToMonggo();  

const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
// available routes
app.use('/api/auth',  require('./routes/auth'))
app.use('/api/notes',  require('./routes/notes'))
app.get('/', (req, res) => {
  res.send('Hello from the other side!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
