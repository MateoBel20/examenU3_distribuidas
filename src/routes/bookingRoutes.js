const express = require('express');
const BookingController = require('../controllers/bookingController');
const router = express.Router();

router.post('/bookings', BookingController.createBooking);
router.get('/bookings', BookingController.getBookings);
router.get('/bookings/:eventId', BookingController.getBookingsByEventId);

module.exports = router;