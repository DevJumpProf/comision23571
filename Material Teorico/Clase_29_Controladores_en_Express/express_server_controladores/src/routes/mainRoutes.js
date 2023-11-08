const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController.js');

/* MAIN ROUTES */

router.get('/home', mainController.home);
router.get('/contact', mainController.contact);
router.get('/about', mainController.about);


module.exports = router;
