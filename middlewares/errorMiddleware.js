import ErrorHandler from './ErrorClass.js';

/**
 * @param {Response} req
 * @param {Response} res
 * @param {NextFunction} next
 * @purpose Handle Not Found Route and pass error to errorHandler
 */
export const notFound = (req, res, next) => {
    const error = new ErrorHandler(404, `Not Found : ${req.originalUrl}`);
    next(error);
};

/**
 *
 * @param {Error} err
 * @param {Response} req
 * @param {Response} res
 * @param {NextFunction} next
 * @purpose Handle all errors
 */
// eslint-disable-next-line no-unused-vars
export const errorHandler = (err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
        status: err.status || 500,
        stack: process.env.NODE_ENV === 'production' ? null : err.stack
    });
    console.log('error: ', err.message);
};
