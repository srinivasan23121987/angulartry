import { AppError } from "src/app/app-error";

export class BadFetchError implements AppError {
    constructor(public args?: any)  {

    }
}