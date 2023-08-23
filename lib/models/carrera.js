'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Carrera extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Carrera.init({
    nombre_carrera: DataTypes.STRING,
    nombre_instituto: DataTypes.INTEGER,
    activo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Carrera',
  });
  return Carrera;
};