const express = require('express');
const multer = require('multer');
const router = express.Router();
const userscontrollers = require('../controllers/usersControllers');
const usersvaliadation = require('../middlewares/uservalidation');
const authvalidation = require('../middlewares/authvalidation');
var upload = multer({dest:'./public/uploads'});
//homepage
router.get('/', userscontrollers.index);

//search
router.get('/search', userscontrollers.search);

//create
router.get('/create',authvalidation, userscontrollers.create);
router.post('/create', upload.single('avatar'), usersvaliadation, userscontrollers.postcreate);
//user detail
router.get('/detail/:uid', userscontrollers.detail);

module.exports = router