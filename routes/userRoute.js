const express = require('express');
const router = express.Router();
const userscontrollers = require('../controllers/usersControllers');
const usersvaliadation = require('../middlewares/uservalidation');
const authvalidation = require('../middlewares/authvalidation');
//homepage
router.get('/', userscontrollers.index);

//search
router.get('/search', userscontrollers.search);

//create
router.get('/create',authvalidation.validation, userscontrollers.create);
router.post('/create',usersvaliadation.validation, userscontrollers.postcreate);
//user detail
router.get('/detail/:uid', userscontrollers.detail);

module.exports = router