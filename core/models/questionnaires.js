const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Questionnaires extends Model {
    static associate(models) {
      Questionnaires.belongsTo(models.Users, {
        foreignKey: 'patient',
      });
      // Questionnaires.hasMany(models.Questions, {
      //   foreignKey: 'id',
      // });
    }
  }
  Questionnaires.init({
    type: DataTypes.STRING,
    questions: DataTypes.STRING,
    patient: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Questionnaires',
  });
  return Questionnaires;
};
