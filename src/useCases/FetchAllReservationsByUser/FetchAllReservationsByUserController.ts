import { FetchAllReservationsByUserUseCase } from "./FetchAllReservationsByUserUseCase";
import { Request, Response } from "express";

export class FetchAllReservationsByUserController {

    constructor(
        private fetchAllReservationsByUserUseCase: FetchAllReservationsByUserUseCase,
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { id } = request.user;
            const reservations = await this.fetchAllReservationsByUserUseCase.execute({
                user_id: id
            });
            if (reservations.length === 0) {
                return response.status(200).json({
                    message: "No reservations found."
                });
            }
            return response.status(200).json(reservations);
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected error."
            });
        }
    }
}