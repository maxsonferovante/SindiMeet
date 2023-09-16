import { Router } from "express";
import { createUserController } from "../useCases/CreateUser";
import { authenticateUserController } from "../useCases/AuthenticateUser";


const authenticateRouter = Router();


authenticateRouter.post("/user/create", (request, response) => {
    return createUserController.handle(request, response);
});


authenticateRouter.post("", (request, response) => {
    return authenticateUserController.handle(request, response);
});

export { authenticateRouter };