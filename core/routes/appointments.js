const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const appointmentsController = require('../controllers/appointments');

const authenticateMiddleware = (req, res, next) => {
  if (typeof req.headers.auth !== 'string') return res.status(400).send({ msg: 'Auth token not found' });
  const token = req.headers.auth;
  const decoded = jwt.verify(token, process.env.secret);
  req.user = { id: decoded.id };
  next();
};

router.get('/', appointmentsController.list);
router.get('/user/', authenticateMiddleware, appointmentsController.userAppointments);
// router.post('/', authenticateMiddleware, appointmentsController.postAppointments);
router.post('/', appointmentsController.postAppointments);
router.get('/user/:id', appointmentsController.userAppointmentsById);

module.exports = router;
