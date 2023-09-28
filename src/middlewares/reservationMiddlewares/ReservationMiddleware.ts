import { body } from 'express-validator';
import { validationMiddleware } from './validationMiddleware';

export const reservationMiddleware = [
    body("date").notEmpty().withMessage("Date is required!").isString().withMessage("Date must be a string!"),
    body("time").notEmpty().withMessage("Time is required!").isString().withMessage("Time must be a string!"),
    validationMiddleware
];