const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
const mongoURI = "mongodb+srv://vedantshah2001:vedant123@cluster0.b3nkk.mongodb.net/MernInn?retryWrites=true&w=majority";

const connectToMongo = () => {
    mongoose.connect(mongoURI, () => {
        console.log('connected to mongo succesfully');
    })
}

module.exports = connectToMongo;