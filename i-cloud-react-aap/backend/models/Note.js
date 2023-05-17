const mongoose = require('mongoose')
const { Schema } = mongoose;

const NotesSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },
  societyName: {
    type: String,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true

  },
  downPayment: {
    type: Number,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  paidInstallments: {
    type: Number
  },
  balloted: {
    type: Boolean
  },

  discription: {
    type: String,
    required: true
  },
  yearOfPurchase: {
    type: Number,
    required: true
  },

  date: {
    type: Date,
    default: Date.now
  },

});

module.exports = mongoose.model('notes', NotesSchema)