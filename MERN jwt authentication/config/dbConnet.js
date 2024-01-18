const mongoose = require('mongoose');
const connect = ()=>{
    mongoose.connect(process.env.URI).then(() => {
        console.log("Connected to MERNAuthentication");
    },
    err => { 
        console.log('error: '+ err)
    }
);
}


module.exports = connect