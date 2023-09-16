import express from "express";

import { Request, Response } from 'express';
import { NextFunction } from 'express-serve-static-core';
import { AppError } from './errors/AppError';


import { authenticateRouter } from './routes/authenticateRouter';
import { reservationRouter } from './routes/reservationRouter';

const app = express();


app.use(express.json());
app.use(authenticateRouter);
app.use(reservationRouter);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            message: err.message,
        });
    }
    return response.status(500).json({
        status: "Error",
        message: `Internal server error ${err.message}`,
    });
}); // middleware to handle errors


export { app };