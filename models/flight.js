import mongoose from "mongoose"

const Schema = mongoose.Schema

const ticketSchema = new Schema({
  seat: {
    type: String, 
    match: /[A-F][1-9]\d?/
  },
  price: {
    type: Number,
    min: 0
  },
})

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
  },
  ticket: [ticketSchema],
  meals: [{ type: Schema.Types.ObjectId, ref: "Meal"}]
}, {
  timestamps: true
})

const Flight = mongoose.model('Flight', flightSchema)

export {
  Flight
}