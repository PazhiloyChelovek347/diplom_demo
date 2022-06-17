const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const { Appointments, User, Specializations } = require('../models');

const postSpecialization = async (req, res) => {
  const {
    title,
    description,
    code,
  } = req.body;
  try {
    const specItem = await Specializations.build(
      {
        id: uuid.v4(),
        title,
        description,
        code,
      },
    );
    await specItem.save();
    res.status(200).send(specItem);
  } catch (error) {
    console.log('zxczxc', error);
    res.status(500).send(error);
  }
};

module.exports = {
  postSpecialization,
//   list,
//   userAppointments,
//   postAppointments,
//   userAppointmentsById,
};
