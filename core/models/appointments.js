const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Appointments extends Model { }
  Appointments.associate = (models) => {
    Appointments.belongsTo(models.Users, {
      foreignKey: 'patient',
    });
    Appointments.belongsTo(models.Clinics, {
      foreignKey: 'clinic',
    });
    Appointments.belongsTo(models.Diagnoses, {
      foreignKey: 'diagnosis',
    });
  };
  Appointments.init({
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    doctorIds: DataTypes.STRING,
    patient: DataTypes.STRING,
    diagnosis: DataTypes.STRING,
    consultationDate: DataTypes.DATE,
    endDate: DataTypes.STRING,
    clinic: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Appointments',
  });
  return Appointments;
};
