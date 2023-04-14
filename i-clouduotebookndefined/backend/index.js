
const connectToMonggo=  require('./db')

const express = require('express')
connectToMonggo();  

const app = express()
const port = 3000
// available routes
app.use('/api/auth',  require('./routes/auth'))
// app.use('./api/auth',  require('./routes/notes'))
app.get('/', (req, res) => {
  res.send('Hello from the other side!')
})
app.use
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
