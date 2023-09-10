import { Request, Response } from "express";

import { LoginUserUseCase } from "./LoginUserUseCase";

import { z } from "zod";

const loginUserShema = z.object({
    nickname: z.string().min(3).max(255),
    password: z.string().min(6).max(255),
});

export class LoginUserController {

    constructor(
        private loginUserUseCase: LoginUserUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { nickname, password } = loginUserShema.parse(request.body);


        try {
            const token = await this.loginUserUseCase.execute({
                nickname,
                password,
            });

            return response.status(200).json({
                token: token,
            });

        } catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected error."
            });
        }
    }
}


