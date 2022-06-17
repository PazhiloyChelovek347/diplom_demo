const express = require('express');

const router = express.Router();
const userController = require('../controllers/users');

router.post('/signup', userController.postUser);
router.post('/signin', userController.loginUser);
router.get('/', userController.getUser);
router.get('/:id', userController.getUserById);

module.exports = router;
