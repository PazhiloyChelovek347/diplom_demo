const express = require('express');

const router = express.Router();
const specController = require('../controllers/specializations');

router.post('/', specController.postSpecialization);

module.exports = router;
