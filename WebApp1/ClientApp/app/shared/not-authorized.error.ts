import { AppError } from "./app-error.error";

export class NotAuthorizedError extends AppError {

    constructor(message?: string) {
        super(message);
    }
}