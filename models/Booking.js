const mongoose = require('mongoose');
const { Schema } = mongoose;
const BookingSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    location: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    rooms: {
        type: Number,
        required: true
    },
    checkin: {
        type: Date,
        default: Date.now,
        required: true
    },
    checkout: {
        type: Date,
        default: Date.now,
        required: true
    },
    days: {
        type: Number,
        required: true,
        default: 1
    },
    total: {
        type: Number,
        required: true
    }
});
  
module.exports = mongoose.model('booking', BookingSchema);