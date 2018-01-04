import { AppError } from "./app-error.error";

export class AccessDeniedError extends AppError {

    constructor(message?: string) {
        super(message);
    }
}