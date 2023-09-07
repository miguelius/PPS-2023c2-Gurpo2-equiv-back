import { Model, DataTypes } from 'sequelize';

export default class Usuarios_carreras extends Model {
  static init(sequelize) {
    return super.init(
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        idUsuario: DataTypes.INTEGER,
        idCarrera: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'UsuariosCarreras',
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Carrera);
    this.belongsTo(models.Usuario);
  }
}
