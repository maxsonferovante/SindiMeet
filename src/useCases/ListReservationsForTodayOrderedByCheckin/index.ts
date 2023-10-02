import { PostgresReservationRepository } from "../../repositories/implementations/PostgresReservationRepository";
import { ListReservationsForTodayOrderedByCheckinController } from "./ListReservationsForTodayOrderedByCheckinController";
import { ListReservationsForTodayOrderedByCheckinUseCase } from "./ListReservationsForTodayOrderedByCheckinUseCase";

const postgresReservationRepository = new PostgresReservationRepository();

const listReservationsForTodayOrderedByCheckinUseCase = new ListReservationsForTodayOrderedByCheckinUseCase(
    postgresReservationRepository
);
const listReservationsForTodayOrderedByCheckinController = new ListReservationsForTodayOrderedByCheckinController(
    listReservationsForTodayOrderedByCheckinUseCase
);

export { listReservationsForTodayOrderedByCheckinUseCase, listReservationsForTodayOrderedByCheckinController };
