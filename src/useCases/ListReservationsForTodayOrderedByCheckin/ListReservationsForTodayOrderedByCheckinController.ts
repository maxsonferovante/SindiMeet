
import { ListReservationsForTodayOrderedByCheckinUseCase } from "./ListReservationsForTodayOrderedByCheckinUseCase";
import { Request, Response } from "express";
import { Reservation } from "../../entities/Reservation";

export class ListReservationsForTodayOrderedByCheckinController {
    constructor(
        private listReservationForTodayOrderedByCheckinUseCase: ListReservationsForTodayOrderedByCheckinUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const reservations = await this.listReservationForTodayOrderedByCheckinUseCase.execute();

            return response.status(200).json({
                message: "Reservations for today ordered by checkin.",
                reservations: reservations
            });
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected error."
            });
        }

    }
}