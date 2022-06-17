const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const axios = require('axios').default;

const postAnswer = async (req, res) => {
  try {
    const {
      questionAndAnswer,
      questionnaire,
    } = req.body;
    const { data } = await axios.post(`${process.env.CORE_URL}/answer/`, {
      questionAndAnswer,
      questionnaire,
      patient: req.user.id,
    },
    {
      headers: {
        auth: req.headers.auth,
      },
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

const getQuests = async (req, res) => {
  try {
    const { data } = await axios.get(`${process.env.CORE_URL}/questionnaire/`,
      {
        headers: {
          auth: req.headers.auth,
        },
      });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  postAnswer,
  getQuests,
};
