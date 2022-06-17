const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Metrics extends Model {
    static associate(models) {
      Metrics.belongsTo(models.Users, {
        foreignKey: 'patient',
      });
    }
  }
  Metrics.init({
    patient: DataTypes.STRING,
    type: DataTypes.STRING,
    value: DataTypes.STRING,
    notes: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Metrics',
  });
  return Metrics;
};
