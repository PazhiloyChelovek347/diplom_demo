const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const questController = require('../controllers/quest');

const authenticateMiddleware = (req, res, next) => {
  if (typeof req.headers.auth !== 'string') return res.status(400).send({ msg: 'Auth token not found' });
  const token = req.headers.auth;
  const decoded = jwt.verify(token, process.env.secret);
  req.user = { id: decoded.id };
  next();
};

router.get('/quest', authenticateMiddleware, questController.getQuests);
router.post('/answer', authenticateMiddleware, questController.postAnswer);

module.exports = router;
