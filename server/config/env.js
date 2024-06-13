const MongoClient = require("mongodb").MongoClient;
const url = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.PORT}`;
MongoClient.connect(url, function (err, client) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MongoDB");
    const db = client.db();
    // Use the database
    const collection = db.collection("mycollection");
    // Perform CRUD operations on the collection
  }
});
