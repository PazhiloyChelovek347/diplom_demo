const express = require('express');

const router = express.Router();
const questionsController = require('../controllers/questions');

router.post('/', questionsController.postQuestions);
router.get('/', questionsController.getQuestions);

module.exports = router;
