const express = require('express');
const eventRoutes = require('./routes/eventRoutes'); // Importa las rutas de eventos
const bookingRoutes = require('./routes/bookingRoutes'); // Importa las rutas de reservas
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api', eventRoutes);
app.use('/api', bookingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});