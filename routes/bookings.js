const express = require("express");
const router = express.Router();
const fetchuser = require('../middleware/fetchuser')
const Booking = require('../models/Booking');
const { body, validationResult } = require('express-validator');


router.get('/fetchallbookings', fetchuser, async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.user.id })
        res.json(bookings);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }

})
router.post('/addbooking', fetchuser, async (req, res) => {
    try {
        const { name, email, location, phone, rooms, days, checkin, checkout, total } = req.body;
        const booking = new Booking({
            name, email, location, phone, days, rooms, checkin, checkout, total, user: req.user.id
        })
        const savedBooking = await booking.save();
        res.json(savedBooking);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
})
module.exports = router;