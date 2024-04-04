// const jwt = require("jwt");
// auth.js file
const jwt = require("jsonwebtoken");

// Define and export the middleware function
module.exports = function (req, res, next) {
  // Get the authorization header from the request
  const authHeader = req.headers.authorization;

  // Check if the header exists and has the format "Bearer <token>"
  if (authHeader && authHeader.startsWith("Bearer ")) {
    // Extract the token from the header
    const token = authHeader.slice(7);

    // Verify the token using the secret key
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
      // If the verification fails, send a 401 response
      if (err) {
        return res.status(401).json({ message: "Invalid token" });
      }

      // If the verification succeeds, attach the payload to the request object
      req.user = payload;

      // Call the next middleware function
      next();
    });
  } else {
    // If the header does not exist or has the wrong format, send a 401 response
    return res.status(401).json({ message: "Missing or malformed token" });
  }
};
