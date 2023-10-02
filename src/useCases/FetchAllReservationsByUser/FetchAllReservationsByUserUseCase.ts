import { IAReservationRepository } from "../../repositories/IAReservationRepository";
import { FetchAllReservationsByUserDTO } from "./FetchAllReservationsByUserDTO";

export class FetchAllReservationsByUserUseCase {
    constructor(
        private reservationRepository: IAReservationRepository,
    ) { }

    async execute(data: FetchAllReservationsByUserDTO) {
        try {
            const reservations = await this.reservationRepository.fetchAllReservationsByUser(data.user_id);
            if (!reservations) throw new Error("No reservations found");
            return reservations;
        }
        catch (err) {
            throw new Error(err);
        }

    }
}