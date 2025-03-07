const { Event } = require('../models'); // Importa el modelo Event desde models/index.js

class EventService {
  static async createEvent(name, description, date, capacity) {
    return await Event.create({ name, description, date, capacity });
  }

  static async getEvents() {
    return await Event.findAll();
  }

  static async getEventById(id) {
    return await Event.findByPk(id);
  }
}

module.exports = EventService;