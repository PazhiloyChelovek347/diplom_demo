const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const {
  Appointments, Users, Clinics, Diagnoses,
} = require('../models');

const list = (req, res) => Appointments
  .findAll({
    order: [['id', 'DESC']],
    include: [
      { model: Users, attributes: ['id', 'name', 'surname', 'email'] }, { model: Clinics }, { model: Diagnoses },
    ],
  })
  .then((appointments) => res.status(200).send(appointments))
  .catch((error) => {
    res.status(400).send(error);
  });

const userAppointments = async (req, res) => {
  try {
    const appointments = await Appointments.findAll({
      where: { patient: req.user.id },
      include: [
        { model: Users, attributes: ['id', 'name', 'surname', 'email'] }, { model: Clinics }, { model: Diagnoses },
      ],
    });
    res.status(200).send(appointments);
  } catch (error) {
    res.status(500).send(error);
  }
};

const userAppointmentsById = async (req, res) => {
  try {
    const appointments = await Appointments.findAll({
      where: {
        user_id: req.params.id,
      },
      include: [{ model: Clinics },
        {
          model: Users,
          attributes: [
            'id',
            'name',
            'surname',
            'mail',
          ],
        }],
    });
    res.status(200).send(appointments);
  } catch (error) {
    res.status(500).send(error);
  }
};

const postAppointments = async (req, res) => {
  const {
    patient,
    type,
    description,
    doctorIds,
    diagnosis,
    consultationDate,
    endDate,
    clinic,
  } = req.body;
  try {
    const appointmentsItem = await Appointments.build(
      {
        id: uuid.v4(),
        patient,
        type,
        description,
        doctorIds,
        diagnosis,
        consultationDate,
        endDate,
        clinic,
      },
    );
    await appointmentsItem.save();
    res.status(200).send(appointmentsItem);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  list,
  userAppointments,
  postAppointments,
  userAppointmentsById,
};
