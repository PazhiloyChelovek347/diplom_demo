const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const axios = require('axios').default;

const postMetric = async (req, res) => {
  try {
    const { type, value, notes } = req.body;
    const { data } = await axios.post(`${process.env.CORE_URL}/metric`, {
      type, value, notes, patient: req.user.id,
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

const getMetrics = async (req, res) => {
  try {
    const { data } = await axios.get(`${process.env.CORE_URL}/metric/${req.params.id || req.user.id}`,
      {
        headers: {
          auth: req.headers.auth || null,
        },
      });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  postMetric,
  getMetrics,
};
