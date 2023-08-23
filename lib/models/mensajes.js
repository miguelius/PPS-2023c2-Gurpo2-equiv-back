'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mensajes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Mensajes.init({
    texto: DataTypes.STRING,
    id_remitente: DataTypes.INTEGER,
    idequivalencia: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mensajes',
  });
  return Mensajes;
};