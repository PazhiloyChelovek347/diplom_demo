const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const {
  Appointments, Users, Specializations, Metrics,
} = require('../models');

const getUserMetrics = async (req, res) => {
  const { id } = req.params;
  try {
    const metrics = await Metrics.findAll(
      {
        where: { patient: id },
        include: { model: Users, attributes: ['id', 'name', 'surname', 'email'] },
      },
    );
    res.status(200).send(metrics);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postMetric = async (req, res) => {
  const {
    patient,
    type,
    value,
    notes,
  } = req.body;
  try {
    const metric = await Metrics.build(
      {
        id: uuid.v4(),
        patient,
        type,
        value,
        notes,
      },
    );
    await metric.save();
    res.status(200).send(metric);
  } catch (error) {
    console.log('zxczxc', error);
    res.status(500).send(error);
  }
};

module.exports = {
  postMetric,
  getUserMetrics,
};
