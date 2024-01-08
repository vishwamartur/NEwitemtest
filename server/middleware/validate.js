// validate.js file
const { body, validationResult } = require("express-validator");

// Define and export the middleware function
module.exports = function (rules) {
  return async function (req, res, next) {
    // Apply the validation rules to the request body
    await Promise.all(rules.map((rule) => rule.run(req)));

    // Get the validation result
    const errors = validationResult(req);

    // If there are no errors, call the next middleware function
    if (errors.isEmpty()) {
      return next();
    }

    // If there are errors, send a 400 response with the error details
    return res.status(400).json({
      errors: errors.array(),
    });
  };
};
