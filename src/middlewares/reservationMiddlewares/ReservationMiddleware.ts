import { body, param } from 'express-validator';
import { validationMiddleware } from './validationMiddleware';

export const reservationMiddleware = [
    body("date").notEmpty().withMessage("Date is required!").isString().withMessage("Date must be a string!"),
    body("time").notEmpty().withMessage("Time is required!").isString().withMessage("Time must be a string!"),
    validationMiddleware
];

export const fetchAllReservationsMiddleware = [
    param("status").notEmpty().withMessage("Status is required!").isString().withMessage("Status must be a string!"),
    validationMiddleware
];