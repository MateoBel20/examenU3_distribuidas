'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { // Define la clave foránea
          model: 'Events', // Nombre de la tabla Events
          key: 'id', // Campo en la tabla Events
        },
        onUpdate: 'CASCADE', // Actualiza en cascada
        onDelete: 'CASCADE', // Elimina en cascada
      },
      userEmail: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      numTickets: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};