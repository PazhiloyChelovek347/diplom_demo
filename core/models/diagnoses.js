const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Diagnoses extends Model {
    static associate(models) { }
  }
  Diagnoses.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    code: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Diagnoses',
  });
  return Diagnoses;
};
