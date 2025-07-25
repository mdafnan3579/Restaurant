import express from "express";

import cors from "cors";

import dotenv from "dotenv";

import { dbconnection } from "./database/dbconnection.js";

import {globalErrorHandler} from "./error/error.js";

import reservationRouter from "./routes/reservationRoute.js";


const app = express()

dotenv.config({path: "./config/config.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["Post"],
    credentials:true,
})
);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/v1/reservation", reservationRouter);

dbconnection();

app.use(globalErrorHandler);

export default app;