import { Request, Response } from "express";
import { UpdateReservationStatusUseCase } from "./UpdateReservationStatusUseCase";
export class UpdateReservationStatusController {
    constructor(
        private updateReservationStatusUseCase: UpdateReservationStatusUseCase
    ) { }

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.user;
        const { id_reservation } = request.params;
        const { status } = request.body;

        try {
            await this.updateReservationStatusUseCase.execute({
                user_id: id,
                id: id_reservation,
                status: status
            });
            return response.status(200).send();
        }
        catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected error."
            });
        }
    }

}