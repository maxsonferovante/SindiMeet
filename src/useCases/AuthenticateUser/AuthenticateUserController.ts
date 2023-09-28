
import { z } from "zod";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { Request, Response } from "express";

const loginUserShema = z.object({
    email: z.string().email().min(6).max(255),
    password: z.string().min(6).max(255),
});

export class AuthenticateUserController {
    constructor(
        private autehnticateUserUseCase: AuthenticateUserUseCase,
    ) { }
    async handle(request: Request, response: Response) {
        const { email, password } = loginUserShema.parse(request.body);

        try {
            const token = await this.autehnticateUserUseCase.execute({
                email,
                password,
            });
            return response.status(200).json({
                token: token,
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected error."
            });
        }
    }
}