'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      // Relación: Una Reserva pertenece a un Evento
      this.belongsTo(models.Event, {
        foreignKey: 'eventId', // Clave foránea en la tabla Bookings
        as: 'event', // Alias para la relación
      });
    }
  }
  Booking.init({
    eventId: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    userEmail: DataTypes.STRING,
    numTickets: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Booking',
    tableName: 'Bookings', // Nombre de la tabla en la base de datos
  });
  return Booking;
};