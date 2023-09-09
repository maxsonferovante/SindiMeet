import { Router } from "express";
import { createUserController } from "../useCases/CreateUser";

const sindMeetRoutes = Router();

sindMeetRoutes.get("/home", (request, response) => {
    const dataAtual = new Date();
    return response.json({
        message: "Hello World",
        dataAtual: dataAtual
    });
});

// route to create a new user
sindMeetRoutes.post("/user/create", (request, response) => {
    return createUserController.handle(request, response);
});

export { sindMeetRoutes };