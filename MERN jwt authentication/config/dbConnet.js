const mongoose = require('mongoose');
const connect = ()=>{
    mongoose.connect(process.env.URI).then(() => {
        console.log("ok je ho gaya connect finally");
    },
    err => { 
        console.log('error: '+ err)
    }
);
}


module.exports = connect