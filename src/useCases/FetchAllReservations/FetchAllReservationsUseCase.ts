import { AppError } from "../../errors/AppError";
import { Reservation } from "../../entities/Reservation";
import { IAReservationRepository } from "../../repositories/IAReservationRepository";
import { IFetchAllReservationsRequestDTO } from "./IFetchAllReservationsRequestDTO";

export class FetchAllReservationsUseCase {

    constructor(
        private reservationRepository: IAReservationRepository,
    ) { }

    async execute(data: IFetchAllReservationsRequestDTO): Promise<Reservation[]> {
        try {
            const reservations = await this.reservationRepository.fetchAllReservations(data.status);
            if (reservations.length == 0) {
                throw new AppError("Reservations not found.", 400);
            }
            return reservations;
        }
        catch (err) {
            throw new AppError(err.message || 'Unexpected error.', 500);
        }

    }
}