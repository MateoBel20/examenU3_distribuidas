const BookingService = require('../services/bookingService');

class BookingController {
  static async createBooking(req, res) {
    const { eventId, userEmail, numTickets } = req.body;
    try {
      const booking = await BookingService.createBooking(eventId, userEmail, numTickets);
      res.status(201).json(booking);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getBookings(req, res) {
    try {
      const bookings = await BookingService.getBookings();
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getBookingsByEventId(req, res) {
    const { eventId } = req.params;
    try {
      const bookings = await BookingService.getBookingsByEventId(eventId);
      res.status(200).json(bookings);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = BookingController;