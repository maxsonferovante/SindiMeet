import { Router, Response, Request } from "express";
import { createReservationController } from "../useCases/CreateReservation/";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";
import { reservationMiddleware, fetchAllReservationsMiddleware } from "../middlewares/reservationMiddlewares/ReservationMiddleware"
import { fetchAllReservationController } from "../useCases/FetchAllReservations";
import { fetchAllReservationsByUserController } from "../useCases/FetchAllReservationsByUser";

const reservationRouter = Router();

reservationRouter.post(
    "/reservation/create",
    ensureAuthenticated,
    reservationMiddleware,
    (request: Request, response: Response) => {
        return createReservationController.handle(request, response);
    });

reservationRouter.get(
    "/reservation/list",
    ensureAuthenticated,
    fetchAllReservationsMiddleware,
    (request: Request, response: Response) => {
        return fetchAllReservationController.haldle(request, response);
    });

reservationRouter.get(
    "/reservation/list/by-user",
    ensureAuthenticated,
    fetchAllReservationsMiddleware,
    (request: Request, response: Response) => {
        return fetchAllReservationsByUserController.handle(request, response);
    }
);

export { reservationRouter };

