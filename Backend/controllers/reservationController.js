// controllers/reservationController.js
import Reservation from "../models/reservationSchema.js"; // Adjust path if needed

export const sendReservation = async (req, res, next) => {
  try {
    const reservation = await Reservation.create(req.body);
    res.status(201).json({
      status: "success",
      data: reservation,
    });
  } catch (err) {
    next(err); // or: res.status(500).json({ message: err.message });
  }
};
