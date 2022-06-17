const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const {
  Appointments, Users, Specializations, Metrics, Clinics, Questionnaires, Answers,
} = require('../models');

const getAnswers = async (req, res) => {
  const { id } = req.params;
  try {
    const items = await Answers.findAll({
      where: { patient: id || req.user.id },
      include: [{ model: Users, attributes: ['id', 'name', 'surname', 'email'] }],
    });
    res.status(200).send(items);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postAnswers = async (req, res) => {
  const {
    patient,
    questionnaire,
    questionAndAnswer,
  } = req.body;
  try {
    const item = await Answers.build(
      {
        id: uuid.v4(),
        patient,
        questionnaire,
        questionAndAnswer,
      },
    );
    await item.save();
    res.status(200).send(item);
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateAnswer = async (req, res) => {
  const data = req.body;
  try {
    const item = await Answers.update(
      data,
      {
        where: {
          id: req.params.id,
        },
      },
    );
    res.status(200).send({ id: req.params.id, data });
  } catch (error) {
    res.status(500).send(error);
  }
};

const deleteAnswer = async (req, res) => {
  try {
    const item = await Answers.destroy(
      {
        where: {
          id: req.params.id,
        },
      },
    );
    res.status(200).send({ id: req.params.id });
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getAnswers,
  postAnswers,
  updateAnswer,
  deleteAnswer,
};
