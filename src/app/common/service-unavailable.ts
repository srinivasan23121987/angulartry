import { AppError } from "src/app/app-error";

export class ServiceNotUnavailable implements AppError {
    constructor(public args?: any) {
       
    }
}