// error.js file
const httpStatus = require("http-status");

// Define and export the custom error class
class CustomError extends Error {
  constructor(message, status = httpStatus.INTERNAL_SERVER_ERROR, cause = null) {
    super(message);
    this.name = this.constructor.name;
    this.message = message;
    this.status = status;
    this.cause = cause;
  }
}

module.exports = CustomError;
