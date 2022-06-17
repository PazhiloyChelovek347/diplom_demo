const express = require('express');

const router = express.Router();
const diagnosesController = require('../controllers/diagnoses');

router.post('/', diagnosesController.postDiagnoses);
router.get('/', diagnosesController.getDiagnoses);

module.exports = router;
