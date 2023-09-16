import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import auth from "../config/auth";
import { PostgresReservationRepository } from "../repositories/implementations/PostgresReservationRepository";

import { AppError } from "../errors/AppError";

interface IPayload {
    sub: string;
}
export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction): void {
    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new AppError('Token missing!', 401);
    }
    const [, token] = authHeader.split(" ");
    try {
        // const { sub: user_id } = verify(token, auth.secrect_token) as IPayload;
        // request.user_id = user_id;
        const decoded = verify(
            token,
            auth.secrect_token
        ) as IPayload;

        const userRepository = new PostgresReservationRepository();
        const user = userRepository.findById(decoded.sub);

        if (!user) {
            throw new AppError('User does not exists!', 401);
        }

        return next();
    } catch (error) {
        throw new AppError('Invalid token! ', 401);
    }
};
