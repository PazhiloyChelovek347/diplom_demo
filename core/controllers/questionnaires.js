const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const {
  Appointments, Users, Specializations, Metrics, Clinics, Questionnaires, Questions,
} = require('../models');

const getQuestionnaires = async (req, res) => {
  const { id } = req.params;
  try {
    const items = await Questionnaires.findAll({
      include: [{ model: Users, attributes: ['id', 'name', 'surname', 'email'] }],
    });
    res.status(200).send(items);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

const postQuestionnaire = async (req, res) => {
  const {
    type,
    questions,
    patient,
  } = req.body;
  try {
    const item = await Questionnaires.build(
      {
        id: uuid.v4(),
        type,
        questions,
        patient,
      },
    );
    await item.save();
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getQuestionnaires,
  postQuestionnaire,
};
