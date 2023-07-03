const mongoose = require("mongoose");
// const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
// const mongoURI = "mongodb+srv://geekstreetguy:vedant123@merninn.b3nkk.mongodb.net/merninn?retryWrites=true&w=majority";
const mongoURI = "mongodb://localhost:27017";

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongo succesfully");
  });
};

module.exports = connectToMongo;
