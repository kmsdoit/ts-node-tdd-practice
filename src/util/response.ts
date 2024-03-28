

interface Response {
    statusCode : number
    message : string
}

export interface SuccessResponse extends Response {
    data : any
}

export interface FailResponse extends Response {
    error : any
}

