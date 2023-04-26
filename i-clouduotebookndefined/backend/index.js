
const connectToMonggo=  require('./db')

const express = require('express')
connectToMonggo();  

const app = express()
app.use(express.json())
const port = 5000
// available routes
app.use('/api/auth',  require('./routes/auth'))
app.use('/api/notes',  require('./routes/notes'))
app.get('/', (req, res) => {
  res.send('Hello from the other side!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
