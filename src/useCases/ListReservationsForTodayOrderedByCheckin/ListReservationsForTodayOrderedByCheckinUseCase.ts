

import { IAReservationRepository } from "../../repositories/IAReservationRepository";
import { Reservation } from "../../entities/Reservation";

export class ListReservationsForTodayOrderedByCheckinUseCase {
    constructor(
        private reservationRepository: IAReservationRepository
    ) { }

    async execute(): Promise<Reservation[]> {
        try {
            return await this.reservationRepository.listReservationsForTodayOrderedByCheckin();
        }
        catch (err) {
            throw new Error(err.message || "Unexpected error.");
        }
    }

}