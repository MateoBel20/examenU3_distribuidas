'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Autor extends Model {
    static associate(models) {
      Autor.hasMany(models.Libro, { foreignKey: 'autorId' });
    }
  }
  Autor.init({
    nombre: DataTypes.STRING,
    nacionalidad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Autor',
    tableName: 'Autores', // Asegúrate de que el nombre de la tabla sea "Autores"
  });
  return Autor;
}; 