import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

import { z } from "zod";


const userSchema = z.object({
    fullName: z.string().min(3).max(255),
    company: z.string().min(3).max(255),
    email: z.string().email(),
    password: z.string().min(6).max(255),
    nickname: z.string().min(3).max(255),
});

const userIdSchema = z.object({
    id: z.string().uuid(),
});
export class CreateUserController {
    constructor(
        private createUserUseCase: CreateUserUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const user = userSchema.parse(request.body);

        try {
            await this.createUserUseCase.execute({
                fullName: user.fullName,
                company: user.company,
                email: user.email,
                password: user.password,
                nickname: user.nickname,
            });
            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected error."
            });
        }
    }
}