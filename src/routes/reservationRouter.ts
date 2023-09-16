import { Router } from "express";
import { createReservationController } from "../useCases/CreateReservation/";
import { ensureAuthenticated } from "../middlewares/EnsureAuthenticated";




const reservationRouter = Router();



reservationRouter.post(
    "/reservation/create",
    ensureAuthenticated,
    (request, response) => {
        return createReservationController.handle(request, response);
    });



export { reservationRouter };

