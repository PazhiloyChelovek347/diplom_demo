'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Users.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    specialization: DataTypes.STRING,
    role: DataTypes.STRING,
    clinic: DataTypes.STRING,
    jobTime: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};