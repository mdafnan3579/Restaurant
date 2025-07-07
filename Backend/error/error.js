// error.js

// Custom error class (optional but useful)
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode || 500;
    this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Global error handler middleware
function globalErrorHandler(err, req, res, next) {
  // Set default values
  const statusCode = err.statusCode || 500;
  const status = err.status || 'error';

  // Log the error (you can customize this part)
  console.error('ERROR 💥:', err);

  res.status(statusCode).json({
    status,
    message: err.message || 'Internal Server Error',
  });
}

export { AppError, globalErrorHandler };
