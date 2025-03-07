const EventService = require('../services/eventService'); // Importa el servicio

class EventController {
  static async createEvent(req, res) {
    const { name, description, date, capacity } = req.body;
    try {
      const event = await EventService.createEvent(name, description, date, capacity);
      res.status(201).json(event);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getEvents(req, res) {
    try {
      const events = await EventService.getEvents();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getEventById(req, res) {
    const { id } = req.params;
    try {
      const event = await EventService.getEventById(id);
      if (event) {
        res.status(200).json(event);
      } else {
        res.status(404).json({ error: 'Evento no encontrado' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = EventController;