const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const {
  Appointments, Users, Specializations, Metrics, Clinics, Questionnaires, Questions,
} = require('../models');

const getQuestions = async (req, res) => {
  const { id } = req.params;
  try {
    const items = await Questions.findAll({
      // include: [Users],
    });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postQuestions = async (req, res) => {
  const {
    type,
    question,
    answers,
    description,
  } = req.body;
  try {
    const item = await Questions.build(
      {
        id: uuid.v4(),
        type,
        question,
        answers,
        description,
      },
    );
    await item.save();
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getQuestions,
  postQuestions,
};
