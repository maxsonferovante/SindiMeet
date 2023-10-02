import { AppError } from "../../errors/AppError";
import { IAReservationRepository } from "../../repositories/IAReservationRepository";
import { ICreateReservationRequestDTO } from "./ICreateReservationRequestDTO";
import { ReservationModel, Status } from "../../entities/Reservation";
export class CreateReservationUseCase {
    constructor(
        private reservationRepository: IAReservationRepository,
    ) { }
    async execute(data: ICreateReservationRequestDTO) {
        try {
            const reservationExists = await this.reservationRepository.existedReservation({
                date: data.date,
                time: data.time,
            });
            if (reservationExists) {
                throw new AppError("Reservation already exists.", 400);
            }
            const reservation = new ReservationModel(
                {
                    userId: data.userId,
                    date: data.date,
                    time: data.time,
                    status: Status.PENDING
                }
            );
            await this.reservationRepository.save(reservation);
        }
        catch (err) {
            new AppError(err.message || 'Unexpected error.', 500);
        }
    }
}