import { Request, Response } from "express";
import { CreateReservationUseCase } from "./CreateReservationUseCase";
import { z } from "zod";


const reservationSchema = z.object({
    userId: z.string().uuid(),
    date: z.date().min(new Date()),
    time: z.string().min(8).max(17),
});

export class CreateReservationController {
    constructor(
        private createReservationUseCase: CreateReservationUseCase,
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        console.log(request.body);
        const reservation = reservationSchema.parse(request.body);

        try {
            const reservationCreate = await this.createReservationUseCase.execute({
                userId: reservation.userId,
                date: new Date(reservation.date),
                time: reservation.time,
            });
            return response.status(201).send();
        } catch (err) {
            return response.status(400).json({
                message: err.message || "Unexpected error."
            });
        }
    }
}