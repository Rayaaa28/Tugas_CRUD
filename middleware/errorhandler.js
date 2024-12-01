const errorHandler = (err, req, res, next) => {
    const now = new Date().toISOString();
    const statusCode = err.status || 500;

    // Log error ke console
    console.error(`[${now}] [Error] ${err.message}`);

    // Respon error ke client
    res.status(statusCode).json({
        error: {
            message: err.message || 'Internal Server Error',
        },
    });
};

module.exports = errorHandler;
