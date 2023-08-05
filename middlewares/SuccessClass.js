export const sendSuccessResponse = (res, data, statusCode = 200, message = 'success') => {
    return res.status(statusCode).json({
        success: true,
        status: statusCode,
        message,
        data
    });
};
