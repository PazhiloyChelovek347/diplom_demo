const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const metrics = require('../controllers/metrics');

const authenticateMiddleware = (req, res, next) => {
  if (typeof req.headers.auth !== 'string') return res.status(400).send({ msg: 'Auth token not found' });
  const token = req.headers.auth;
  const decoded = jwt.verify(token, process.env.secret);
  req.user = { id: decoded.id };
  next();
};

router.post('/', authenticateMiddleware, metrics.postMetric);
router.get('/', authenticateMiddleware, metrics.getMetrics);
router.get('/:id', metrics.getMetrics);

module.exports = router;
