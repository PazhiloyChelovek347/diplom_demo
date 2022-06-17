const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Answers extends Model {
    static associate(models) {
      Answers.belongsTo(models.Users, {
        foreignKey: 'patient',
      });
    }
  }
  Answers.init({
    patient: DataTypes.STRING,
    questionnaire: DataTypes.STRING,
    questionAndAnswer: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Answers',
  });
  return Answers;
};
