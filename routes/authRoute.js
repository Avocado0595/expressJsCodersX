const express = require('express');
const router = express.Router();
const userscontrollers = require('../controllers/authControllers');

//
router.get('/login', userscontrollers.login);
router.post('/login', userscontrollers.postlogin);

module.exports = router