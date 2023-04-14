import mongoose from 'mongoose';
const { Schema } = mongoose;

const NotesSchema = new Schema({
  title: {
      type:String,
      required: true
    },
  discription: {
      type:String,
      required: true
    },
  tag: {
      type:String,
      default: "Generat"
    },
 
  date: {
      type:Date,
        default: Date.now
    },
  
});

module.exports = mongoose.model('notes', NotesSchema)