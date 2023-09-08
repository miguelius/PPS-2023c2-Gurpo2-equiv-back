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
        UsuarioId: DataTypes.INTEGER,
        CarreraId: DataTypes.INTEGER,
      },
      {
        sequelize,
        modelName: 'UsuariosCarreras',
      }
    );
  }
  static associate(models) {
    this.belongsTo(models.Usuario, { foreignKey: 'UsuarioId' });
    this.belongsTo(models.Carrera, { foreignKey: 'id_carrera' });
  }
}
