'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Libro extends Model {
    static associate(models) {
      Libro.belongsTo(models.Autor, { foreignKey: 'autorId' });
      Libro.belongsTo(models.Genero, { foreignKey: 'generoId' });
    }
  }
  Libro.init({
    titulo: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    stock: DataTypes.INTEGER,
    autorId: DataTypes.INTEGER,
    generoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Libro',
  });
  return Libro;
};