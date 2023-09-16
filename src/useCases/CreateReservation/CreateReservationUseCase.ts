


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
            const reservation = new ReservationModel(
                {
                    userId: data.userId,
                    date: data.date,
                    time: data.time,
                    status: Status.PENDING
                }
            );
            const reservationExists = await this.reservationRepository.existedReservation({
                userId: reservation.userId,
                date: reservation.date,
                time: reservation.time
            });

            if (reservationExists) {
                throw new AppError("Reservation already exists.", 400);
            }
            const reservationCreate = await this.reservationRepository.save(reservation);
            return reservationCreate;
        }
        catch (err) {
            throw new AppError(err.message || "Unexpected error.", 400);
        }
    }
}