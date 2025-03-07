const { Booking } = require('../../models/booking');

class BookingService {
  static async createBooking(eventId, userEmail, numTickets) {
    return await Booking.create({ eventId, userEmail, numTickets });
  }

  static async getBookings() {
    return await Booking.findAll();
  }

  static async getBookingsByEventId(eventId) {
    return await Booking.findAll({ where: { eventId } });
  }
}

module.exports = BookingService;