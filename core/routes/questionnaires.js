const express = require('express');

const router = express.Router();
const questionnairesController = require('../controllers/questionnaires');

router.post('/', questionnairesController.postQuestionnaire);
router.get('/', questionnairesController.getQuestionnaires);

module.exports = router;
