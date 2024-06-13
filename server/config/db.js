const MongoClient = require("mongodb").MongoClient;
const url = process.env.MONGO_URI;
const client = new MongoClient(url);

client.connect((err) => {
  if (err) {
    console.error("Error connecting to the database: " + err);
    return;
  }
  console.log("Connected to the database.");
  module.exports = client;
});
