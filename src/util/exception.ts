// custom-exceptions.ts 파일에 정의
import { HttpException } from 'node-http-exceptions';
import {FailResponse} from "./response";


export class NotFoundException extends HttpException {
    constructor(message: string) {
        super(404, message);
    }

    toJson() {
        const failResponse : FailResponse = {
            statusCode : 404,
            message : this.message,
            error : null
        }

        return failResponse
    }
}

export class BadRequestException extends HttpException {
    constructor(message: string) {
        super(400, message);
    }
}

export class InternalServerError extends HttpException {
    constructor(message: string) {
        super(500, message);
    }
}