import { IAUserRepository } from "../../repositories/IAUserRepository";
import { compare } from 'bcrypt';
import { IAuthenticateUserRequestDTO } from "./IAuthenticateUserRequestDTO";
import { IAuthenticateUserResponseDTO } from "./IAuthenticateUserResponseDTO";
import { sign } from "jsonwebtoken";
import auth from "../../config/auth";


export class AuthenticateUserUseCase {
    constructor(
        private userRepository: IAUserRepository
    ) {

    }

    async execute(data: IAuthenticateUserRequestDTO): Promise<IAuthenticateUserResponseDTO> {
        const user = await this.userRepository.findByNickname(data.nickname);

        if (!user) {
            throw new Error('Email or password incorrect!');
        }

        const passwordMatch = await compare(data.password, user.password);
        if (!passwordMatch) {
            throw new Error('Email or password incorrect!');
        }

        // Gerar token
        const token = sign(
            {},
            auth.secrect_token,
            {
                subject: user.id,
                expiresIn: auth.expires_in_token
            }
        )

        return {
            user: {
                name: user.nickname,
                email: user.email
            },
            token
        }
    }
}