import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import auth from "../config/auth";
import { PostgresUserAdminRepository } from "../repositories/implementations/PostgresUserAdminRepository";
import { AppError } from "../errors/AppError";


interface IPayload {
    id: string;
}

export function adminAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction): void {

    const authHeader = request.headers.authorization;
    if (!authHeader) {
        throw new AppError('Token missing!', 401);
    }

    const token = authHeader.split(" ")[1];
    try {
        const { id } = verify(token, auth.secrect_token) as IPayload;
        const userAdminRepository = new PostgresUserAdminRepository();
        const user = userAdminRepository.findById(id);
        if (!user) {
            throw new AppError('User does not exists!', 401);
        }
        else {
            request.user = {
                id: id,
            };
            return next();
        }
    }
    catch (error) {
        throw new AppError('Invalid token!', 401);
    }
}