// reservationRoute.js
import express from "express";
import { sendReservation } from "../controllers/reservationController.js"; // 👈 Check this path

const router = express.Router();

router.post("/send", sendReservation);

export default router;
