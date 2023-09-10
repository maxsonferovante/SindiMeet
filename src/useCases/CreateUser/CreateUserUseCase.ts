import { hash } from "bcrypt";
import { UserModel } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProviders";
import { IAUserRepository } from "../../repositories/IAUserRepository";
import { ICreateUserRequestDTO } from "./ICreateUserRequestDTO";

export class CreateUserUseCase {
    private readonly saltRounds = 8;
    constructor(
        private userRepository: IAUserRepository,
        private mailProvider: IMailProvider,
    ) { }

    async execute(data: ICreateUserRequestDTO) {
        try {


            const userAlreadyExists = await this.userRepository.existedEmail(data.email);
            const userAlreadyExistsNickname = await this.userRepository.existedNickname(data.nickname);

            if (userAlreadyExists && userAlreadyExistsNickname) {
                throw new Error("User already exists.");
            }

            const user = new UserModel(
                {
                    fullName: data.fullName,
                    company: data.company,
                    email: data.email,
                    password: await hash(data.password, this.saltRounds),
                    nickname: data.nickname
                }
            );

            await this.userRepository.save(user);

            /* await this.mailProvider.sendMail({
                to: {
                    name: data.fullName,
                    email: data.email
                },
                from: {
                    name: "Equipe do meu App",
                    email: "equipe@meuapp.com"
                },
                subject: "Seja bem-vindo à plataforma SindMeet",
                body: "<p>Você já pode fazer login em nossa plataforma.</p>"
            }); */
        }
        catch (err) {
            throw new Error("Failed to create user in UseCase. " + err.message);
        }
    }
}