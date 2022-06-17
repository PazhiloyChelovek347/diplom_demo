const express = require('express');

const router = express.Router();
const metricsController = require('../controllers/clinics');

router.post('/', metricsController.postClinic);
router.get('/', metricsController.getClinics);

module.exports = router;
