import mongoose from 'mongoose';
const { Schema } = mongoose;

const UserSchema = new Schema({
  name: {
      type:String,
      required: true
    },
  password : {
      type:String,
      required: true
    },
  eamil: {
      type:String,
      unique: true,
      required: true
    },
  date: {
      type:Date,
        default: Date.now
    },
  
});

module.exports = mongoose.model('user', UserSchema)