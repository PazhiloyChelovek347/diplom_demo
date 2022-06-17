const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const {
  Appointments, Users, Specializations, Metrics, Clinics,
} = require('../models');

const getClinics = async (req, res) => {
  const { id } = req.params;
  try {
    const clinics = await Clinics.findAll();
    res.status(200).send(clinics);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postClinic = async (req, res) => {
  const {
    title,
    description,
    address,
  } = req.body;
  try {
    const clinic = await Clinics.build(
      {
        id: uuid.v4(),
        title,
        description,
        address,
      },
    );
    await clinic.save();
    res.status(200).send(clinic);
  } catch (error) {
    console.log('zxczxc', error);
    res.status(500).send(error);
  }
};

module.exports = {
  getClinics,
  postClinic,
};
