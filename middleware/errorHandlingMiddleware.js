export const errorHandlingMiddleware = (err, req, res, next) => {
    err.message = err.message || "Something went wrong";
    err.status = err.status || 500;

    res.status(err.status).json({
        message: err.message,
        success: false,
    });
}