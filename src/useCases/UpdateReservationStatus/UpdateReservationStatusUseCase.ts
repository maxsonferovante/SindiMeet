import { IAReservationRepository } from "../../repositories/IAReservationRepository";
import { IUpdateReservationStatusRequestDTO } from "./UpdateReservationStatusDTO";

export class UpdateReservationStatusUseCase {
    constructor(
        private reservationRepository: IAReservationRepository
    ) { }

    async execute(data: IUpdateReservationStatusRequestDTO): Promise<void> {
        try {
            await this.reservationRepository.updateReservationStatus(data);
        }
        catch (err) {
            throw new Error(err.message || "Unexpected error.");
        }
    }
}   