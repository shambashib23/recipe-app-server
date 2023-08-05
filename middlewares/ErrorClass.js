class ErrorClass {
    constructor(status, message = 'An error occurred') {
        this.status = status;
        this.message = message;
    }

    static badRequestError(message = 'The request could not be understood or was missing required parameters.') {
        throw new ErrorClass(400, message);
    }

    static validationError(message = 'One or more fields failed validation.') {
        throw new ErrorClass(422, message);
    }

    static notFoundError(message = 'The requested resource could not be found.', data) {
        throw new ErrorClass(404, message, data);
    }

    static serverError(message = 'An internal server error occurred.') {
        throw new ErrorClass(500, message);
    }

    static forbidden(message = 'You do not have permission to access this resource.') {
        throw new ErrorClass(403, message);
    }

    static unAuthorizedError(message = 'You are not authorized to access this route') {
        throw new ErrorClass(401, message);
    }

    static conflictError(
        message = 'The request could not be completed due to a conflict with the current state of the target resource.'
    ) {
        throw new ErrorClass(409, message);
    }
}

export default ErrorClass;
