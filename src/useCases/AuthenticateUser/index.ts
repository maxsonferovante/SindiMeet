import { PostgresUserRepository } from "../../repositories/implementations/PostgresUserRepository";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { AuthenticateUserController } from "./AuthenticateUserController";


const postgresUserRepository = new PostgresUserRepository();

const autehnticateUserUseCase = new AuthenticateUserUseCase(
    postgresUserRepository,
);


const authenticateUserController = new AuthenticateUserController(
    autehnticateUserUseCase,
);

export { autehnticateUserUseCase, authenticateUserController };