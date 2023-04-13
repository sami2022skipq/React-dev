const mongoose = require('mongoose')
const mongoURI ="mongodb://localhost:2701"



const connectToMonggo =()=>{
    mongoose.connect(mongoURI)
    {
        console.log("just checking")
    }
}

module.exports = connectToMonggo;