import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
import auth from "../config/auth";


import { IAUserRepository } from "../repositories/IAUserRepository";

interface IPayload {
    sub: string;
}

export class EnsureAuthenticatedMiddleware {

    constructor(
        private readonly userRepository: IAUserRepository
    ) { }

    async handle(
        request: Request,
        response: Response,
        next: NextFunction) {
        const authHeader = request.headers.authorization;

        if (!authHeader) {
            throw new Error('Token missing!');
        }

        const [, token] = authHeader.split(' ');

        try {
            // const { sub: user_id } = verify(token, auth.secrect_token) as IPayload;
            // request.user_id = user_id;
            const decoded = verify(
                token,
                auth.secrect_token
            ) as IPayload;

            const user = this.userRepository.findById(decoded.sub);

            if (!user) {
                throw new Error('User does not exists!');
            }

            return next();
        } catch (error) {
            throw new Error('Invalid token!');
        }
    }
}
