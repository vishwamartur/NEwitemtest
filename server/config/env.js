const dotenv = require("dotenv");
# .env file
DB_HOST=localhost
DB_USER=root
DB_PASS=123456
PORT=3000
// env.js file
const dotenv = require("dotenv");
const result = dotenv.config();
if (result.error) {
  throw result.error;
}
module.exports = process.env;
