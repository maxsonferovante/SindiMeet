import { Request, Response } from "express";
import { IAUserRepository } from "../../repositories/IAUserRepository";
import { dataLoginUser } from "./ILoginUserRequestDTO";
import { compareSync } from "bcrypt";

export class LoginUserUseCase {
    constructor(
        private userRepository: IAUserRepository
    ) { }

    async execute(data: dataLoginUser) {
        try {
            const user = await this.userRepository.findByNickname(data.nickname);

            if (!user) {
                throw new Error("User not found.");
            }
            if (user.nickname !== data.nickname) {
                throw new Error("Nickname is incorrect.");
            }
            const match = compareSync(data.password, user.password);
            if (!match) {
                throw new Error("Password is incorrect.");
            }
            return "aqui será o retorno do token";
        }
        catch (err) {
            throw new Error("Failed to login user in UseCase. " + err.message);
        }
    }
}
