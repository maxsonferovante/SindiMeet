export class AppError {
    constructor(
        public readonly message: string,
        public readonly statusCode: number
    ) { }
    create(message: string, statusCode = 400) {
        return new AppError(message, statusCode);
    }
}

export default {
    "NotFoundError": "NotFoundError",
    "BadRequestError": "BadRequestError",
    "UnauthorizedError": "UnauthorizedError",
    "ForbiddenError": "ForbiddenError",
    "InternalServerError": "InternalServerError",
    "NotImplementedError": "NotImplementedError",
    "BadGatewayError": "BadGatewayError",

}