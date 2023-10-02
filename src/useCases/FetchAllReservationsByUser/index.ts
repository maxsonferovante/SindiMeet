import { PostgresReservationRepository } from "../../repositories/implementations/PostgresReservationRepository";
import { FetchAllReservationsByUserController } from "./FetchAllReservationsByUserController";
import { FetchAllReservationsByUserUseCase } from "./FetchAllReservationsByUserUseCase";

const postgresReservationRepository = new PostgresReservationRepository();
const fetchAllReservationsByUserUseCase = new FetchAllReservationsByUserUseCase(
    postgresReservationRepository
);
const fetchAllReservationsByUserController = new FetchAllReservationsByUserController(
    fetchAllReservationsByUserUseCase
);

export { fetchAllReservationsByUserController, fetchAllReservationsByUserUseCase };