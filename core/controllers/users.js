const jwt = require('jsonwebtoken');
const uuid = require('uuid');
const {
  Specializations, Users, Appointments, Clinics,
} = require('../models');
const { ROLES } = require('../utils/constants');

const postUser = async (req, res) => {
  let alreadyCreated = false;
  let response;
  try {
    response = await Users.findOne({ where: { email: req.body.email } });
  } catch (err) {
    res.status(404).send(err);
  }
  alreadyCreated = !(response === null);
  if (!req.body.email || !req.body.password) {
    res.status(400).send({ msg: 'Please pass username and password.' });
  } else if (!alreadyCreated) {
    try {
      const user = await Users
        .create({
          id: uuid.v4(),
          name: req.body.name,
          surname: req.body.surname,
          email: req.body.email,
          password: req.body.password,
          avatar: req.body.avatar,
          specialization: req.body.specialization || ROLES.PATIENT,
        });
      res.status(201).send(
        jwt.sign(JSON.parse(JSON.stringify({ id: user.id, name: user.name })),
          process.env.secret, { expiresIn: 3600 * 60 }),
      );
    } catch (err) {
      res.status(400).send(err);
    }
  } else {
    res.send('User already created.');
  }
};

const loginUser = async (req, res) => {
  try {
    const user = await Users.findOne({ where: { email: req.body.email } });
    if (!user) {
      res.status(404).send('Authentication failed. User not found.');
    }
    user.comparePassword(req.body.password, user.password, (err, isMatch) => {
      if (isMatch && !err) {
        const token = jwt.sign(
          JSON.parse(JSON.stringify({ id: user.id, name: user.name })),
          process.env.secret, { expiresIn: 3600 * 60 },
        );
        res.status(200).send({ success: true, token });
      } else {
        res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
      }
    });
  } catch (err) {
    res.status(400).send(err);
  }
};

const getUser = async (req, res) => {
  const token = req.headers.auth;
  if (token !== undefined && token !== '') {
    try {
      const decoded = jwt.verify(token, process.env.secret);
      const user = await Users.findOne({
        attributes: ['id', 'name', 'surname', 'email', 'avatar'],
        where: { id: decoded.id },
        include: [{ model: Appointments }],
      });
      res.status(200).send(user);
    } catch (error) {
      res.status(401).send(error);
    }
  } else res.status(400).send({ msg: 'Auth token not found' });
};

const getUserById = async (req, res) => {
  try {
    const user = await Users.findOne({
      attributes: ['id', 'name', 'surname', 'email'],
      where: { id: req.params.id },
      include: [{ model: Appointments }, { model: Specializations }, { model: Clinics }],
    });
    res.status(200).send(user);
  } catch (error) {
    console.log(123123, error);
    res.status(401).send(error);
  }
};

module.exports = {
  postUser,
  loginUser,
  getUser,
  getUserById,
};
