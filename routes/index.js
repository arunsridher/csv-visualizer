//include express and create a router
const express = require('express');
const router = express.Router();

//default url
const homeController = require('../controllers/home_controller');
router.get('/', homeController.home);

//redirect all routes with files to files.js
router.use('/files', require('./files'));

//export router
module.exports = router;