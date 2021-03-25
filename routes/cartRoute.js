const express = require('express');
const router = express.Router();
const cartcontrollers = require('../controllers/cartControllers');

//
router.get('/add/:productId', cartcontrollers.add);

module.exports = router