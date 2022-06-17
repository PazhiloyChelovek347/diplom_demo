const {
  Model,
} = require('sequelize');
const bcrypt = require('bcrypt');

module.exports = (sequelize, DataTypes) => {
  class Users extends Model { }
  Users.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    specialization: DataTypes.STRING,
    role: DataTypes.STRING,
    clinic: DataTypes.STRING,
    jobTime: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Users',
  });
  Users.beforeSave((user, options) => {
    if (user.changed('password')) {
      // eslint-disable-next-line no-param-reassign
      user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    }
  });
  Users.prototype.comparePassword = (passw, pass, cb) => {
    bcrypt.compare(passw, pass, (err, isMatch) => {
      if (err) {
        return cb(err);
      }
      return cb(null, isMatch);
    });
  };
  Users.associate = (models) => {
    Users.hasMany(models.Appointments, {
      foreignKey: 'patient',
    });
    Users.belongsTo(models.Clinics, {
      foreignKey: 'clinic',
    });
    Users.belongsTo(models.Specializations, {
      foreignKey: 'specialization',
    });
  };
  return Users;
};
