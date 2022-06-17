const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Specializations extends Model {
    static associate(models) {
      // Specializations.belongsTo(models.Users, {
      //   foreignKey: 'specialization',
      // });
    }
  }
  Specializations.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    code: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Specializations',
  });
  return Specializations;
};
