// models/reservationSchema.js
import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: Date,
  time: String,
  numberOfGuests: Number,
  specialRequests: String,
});

const Reservation = mongoose.model("Reservation", reservationSchema);

export default Reservation;
