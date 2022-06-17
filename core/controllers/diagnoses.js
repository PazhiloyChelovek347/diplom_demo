const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const {
  Appointments, Users, Specializations, Metrics, Clinics, Diagnoses,
} = require('../models');

const getDiagnoses = async (req, res) => {
  try {
    const diagnoses = await Diagnoses.findAll();
    res.status(200).send(diagnoses);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postDiagnoses = async (req, res) => {
  const {
    title,
    description,
    code,
  } = req.body;
  try {
    const diagnosis = await Diagnoses.build(
      {
        id: uuid.v4(),
        title,
        description,
        code,
      },
    );
    await diagnosis.save();
    res.status(200).send(diagnosis);
  } catch (error) {
    console.log('zxczxc', error);
    res.status(500).send(error);
  }
};

module.exports = {
  getDiagnoses,
  postDiagnoses,
};
