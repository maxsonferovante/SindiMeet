import { Router } from "express";
import { createUserController } from "../useCases/CreateUser";
import { authenticateUserController } from "../useCases/AuthenticateUser";


const authenticateRouter = Router();


authenticateRouter.post("/user/create", createUserController.handle);
authenticateRouter.post("", authenticateUserController.handle);

export { authenticateRouter };