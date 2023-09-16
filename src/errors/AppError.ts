export class AppError {
    constructor(
        public readonly message: string,
        public readonly statusCode: number
    ) { }
    create(message: string, statusCode = 400) {
        return new AppError(message, statusCode);
    }
}