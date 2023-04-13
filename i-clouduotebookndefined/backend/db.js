const mongoose = require('mongoose')
const mongoURI ="mongodb+srv://AbdulSAmi:ASMaccounts44@cluster0.rmvxjuc.mongodb.net/test"

const connectToMonggo =()=>{
    // 
    mongoose.connect(mongoURI)
    .then(() => {
            console.log("ok je ho gaya connect finally");
        },
        err => { 
            console.log('error: '+ err)
        }
    );
}

module.exports = connectToMonggo;