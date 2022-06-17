const express = require('express');

const router = express.Router();
const metricsController = require('../controllers/metrics');

router.post('/', metricsController.postMetric);
router.get('/:id', metricsController.getUserMetrics);

module.exports = router;
