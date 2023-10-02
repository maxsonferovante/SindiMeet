import { PostgresReservationRepository } from "../../repositories/implementations/PostgresReservationRepository";
import { FetchAllReservationsUseCase } from "./FetchAllReservationsUseCase";
import { FetchAllReservationController } from "./FetchAllReservationsController";


const postgresReservationRepository = new PostgresReservationRepository();
const fetchAllReservationsUseCase = new FetchAllReservationsUseCase(postgresReservationRepository);
const fetchAllReservationController = new FetchAllReservationController(fetchAllReservationsUseCase);

export { fetchAllReservationsUseCase, fetchAllReservationController };