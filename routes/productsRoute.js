const express = require('express');
const router = express.Router();
const productscontrollers = require('../controllers/productsControllers');

router.get('/', productscontrollers.index);

module.exports = router