const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const axios = require('axios').default;

const userAppointments = async (req, res) => {
  try {
    const { data } = await axios.get(`${process.env.CORE_URL}/user/appointments/user`, {
      headers: {
        auth: req.headers.auth,
      },
    });
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postAppointments = async (req, res) => {
  const {
    type,
    description,
    doctorIds,
    diagnosis,
    consultationDate,
    endDate,
    clinic,
  } = req.body;
  try {
    const appointmentsItem = {
      type,
      description,
      doctorIds,
      diagnosis,
      consultationDate,
      endDate,
      clinic,
    };
    const { data } = await axios.post(`${process.env.CORE_URL}/user/appointments`, {
      ...appointmentsItem,
      patient: req.user.id,
    }, {
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
  // list,
  userAppointments,
  postAppointments,
  // userAppointmentsById,
};
