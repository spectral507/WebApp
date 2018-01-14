import { AppError } from './app.error';

export class BadRequestError extends AppError {
    details: { [key: string]: string[] };

    constructor(details: { [key: string]: string[] }, message?: string, ) {
        super(message);
        this.details = details;
    }
}