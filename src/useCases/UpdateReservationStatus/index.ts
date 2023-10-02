import { PostgresReservationRepository } from "../../repositories/implementations/PostgresReservationRepository";
import { UpdateReservationStatusController } from "./UpdateReservationStatusController";
import { UpdateReservationStatusUseCase } from "./UpdateReservationStatusUseCase";

const postgresReservationRepository = new PostgresReservationRepository();
const updateReservationStatusUseCase = new UpdateReservationStatusUseCase(
    postgresReservationRepository
);
const updateReservationStatusController = new UpdateReservationStatusController(
    updateReservationStatusUseCase
);
export { updateReservationStatusUseCase, updateReservationStatusController };