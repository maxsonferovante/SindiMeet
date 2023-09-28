import { Request, Response } from "express";
import { CreateReservationUseCase } from "./CreateReservationUseCase";
import { InvalidParamError } from "../../errors/AppError";

export class CreateReservationController {
    constructor(
        private createReservationUseCase: CreateReservationUseCase,
    ) { }
    async handle(request: Request, response: Response): Promise<Response> {
        try {
            const { date, time } = request.body;
            const { id } = request.user;

            await this.createReservationUseCase.execute({
                userId: id,
                date: new Date(date),
                time: time,
            });
            return response.status(201).json(
                {
                    message: "Reservation created successfully!",
                    date: {
                        date: date,
                        time: time,
                    }
                }
            );
        }
        catch (err) {
            const erroInfo = new InvalidParamError({
                message: err.errors[0].message
            });
            return response.status(401).json({
                message: erroInfo.message
            });
        }
    }
}