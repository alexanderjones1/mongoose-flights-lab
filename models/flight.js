import mongoose from "mongoose"

const Schema = mongoose.Schema

const flightSchema = new Schema({
  airline: {
    type: String,
    required: true
  },
  airport: {
    type: String,
    required: true,
  },
  flightNo: {
    type: Number,
    min: 1,
    max: 2000,
  },
  departs: {
    type: Date,
    default: function() {
      return new Date().getFullYear()
    }
    }
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}