const express = require('express');
const EventController = require('../controllers/eventController'); // Importa el controlador
const router = express.Router();

router.post('/events', EventController.createEvent);
router.get('/events', EventController.getEvents);
router.get('/events/:id', EventController.getEventById);

module.exports = router;