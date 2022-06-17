const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const answersController = require('../controllers/answers');

const authenticateMiddleware = (req, res, next) => {
  if (typeof req.headers.auth !== 'string') return res.status(400).send({ msg: 'Auth token not found' });
  const token = req.headers.auth;
  const decoded = jwt.verify(token, process.env.secret);
  req.user = { id: decoded.id };
  next();
};

router.post('/', answersController.postAnswers);
router.get('/', authenticateMiddleware, answersController.getAnswers);
router.get('/:id', answersController.getAnswers);
router.patch('/:id', answersController.updateAnswer);
router.delete('/:id', answersController.deleteAnswer);

module.exports = router;
