'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      // Relación: Un Evento tiene muchas Reservas
      this.hasMany(models.Booking, {
        foreignKey: 'eventId', // Clave foránea en la tabla Bookings
        as: 'bookings', // Alias para la relación
      });
    }
  }
  Event.init({
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    date: DataTypes.DATE,
    capacity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
    tableName: 'Events', // Nombre de la tabla en la base de datos
  });
  return Event;
};