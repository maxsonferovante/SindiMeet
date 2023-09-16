import { IAUserRepository } from "../../repositories/IAUserRepository";
import { compare } from 'bcrypt';
import { IAuthenticateUserRequestDTO } from "./IAuthenticateUserRequestDTO";
import { IAuthenticateUserResponseDTO } from "./IAuthenticateUserResponseDTO";
import { sign } from "jsonwebtoken";
import auth from "../../config/auth";
import { AppError } from "../../errors/AppError";

export class AuthenticateUserUseCase {
    constructor(
        private userRepository: IAUserRepository
    ) { }
    async execute(data: IAuthenticateUserRequestDTO): Promise<IAuthenticateUserResponseDTO> {
        const user = await this.userRepository.findByNickname(data.nickname);

        if (!user) {
            throw new AppError('Email or password incorrect!', 401);
        }

        const passwordMatch = await compare(data.password, user.password);
        if (!passwordMatch) {
            throw new AppError('Email or password incorrect!', 401);
        }

        // Gerar token
        const token = sign({},
            auth.secrect_token,
            {
                subject: user.id,
                expiresIn: auth.expires_in_token
            }
        )
        return {
            token: token,
            user: {
                nickname: user.nickname,
                email: user.email,
            }
        }
    }
}