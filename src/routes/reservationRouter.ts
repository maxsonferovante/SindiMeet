import { Router, Response, Request } from "express";
import { createReservationController } from "../useCases/CreateReservation/";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { reservationMiddleware } from "../middlewares/reservationMiddlewares/ReservationMiddleware"
import { CreateReservationController } from "../useCases/CreateReservation/CreateReservationController";


const reservationRouter = Router();

reservationRouter.post(
    "/reservation/create",
    ensureAuthenticated,
    reservationMiddleware,
    (request: Request, response: Response) => {
        return createReservationController.handle(request, response);
    });

export { reservationRouter };

