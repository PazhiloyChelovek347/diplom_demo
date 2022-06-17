const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    static associate(models) {
      // Questions.hasMany(models.Questionnaires, {
      //   foreignKey: 'questions',
      // });
    }
  }
  Questions.init({
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    answers: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
};
