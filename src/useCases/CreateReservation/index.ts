import { PostgresReservationRepository } from "../../repositories/implementations/PostgresReservationRepository";

import { CreateReservationUseCase } from "./CreateReservationUseCase";
import { CreateReservationController } from "./CreateReservationController";

const postgresReservationRepository = new PostgresReservationRepository();

const createReservationUseCase = new CreateReservationUseCase(postgresReservationRepository);

const createReservationController = new CreateReservationController(createReservationUseCase);


export { createReservationUseCase, createReservationController };