import { Request, Response } from "express";
import { FetchAllReservationsUseCase } from "./FetchAllReservationsUseCase";
import { InvalidParamError } from "../../errors/AppError";

export class FetchAllReservationController {
    constructor(
        private fetchAllReservationsUseCase: FetchAllReservationsUseCase,
    ) { }

    async haldle(request: Request, response: Response): Promise<Response> {
        try {
            const { status } = request.params;
            const { id } = request.user;
            const reservations = await this.fetchAllReservationsUseCase.execute({
                status: status
            });

            return response.status(200).json({
                message: "Reservations fetched successfully!",
                reservations: reservations
            });
        }
        catch (err) {
            const erroInfo = new InvalidParamError({
                message: err.message || 'Unexpected error.'
            });
            return response.status(401).json({
                message: erroInfo.message
            });
        }

    }
}