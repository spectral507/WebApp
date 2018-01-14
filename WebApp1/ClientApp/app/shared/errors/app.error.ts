export class AppError implements Error {
    name: string;
    message: string;
    stack?: string;

    constructor(message?: string) {
        this.message = message;
    }
}