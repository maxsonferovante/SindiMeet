import { validationResult } from 'express-validator';
import { Request, Response, NextFunction } from "express";


export const validationMiddleware = (request: Request, response: Response, next: NextFunction) => {
    const erros = validationResult(request);
    if (!erros.isEmpty()) {
        return response.status(400).json(erros.array());
    }
    next();
}