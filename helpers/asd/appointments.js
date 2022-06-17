const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Appointments.belongsTo(models.User, {
        foreignKey: 'user_id',
      });
    }
  }
  Appointments.init({
    title: DataTypes.STRING,
    info: DataTypes.TEXT,
    tags: DataTypes.TEXT,
    user_id: DataTypes.BIGINT,
  }, {
    sequelize,
    modelName: 'Appointments',
  });
  return Appointments;
};
