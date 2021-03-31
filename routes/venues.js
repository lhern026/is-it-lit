const express = require('express');
const router = express.Router();
const venuesCtrl = require('../controllers/venues');
const isLoggedIn = require('../config/auth');

//get /venues
router.get('/', venuesCtrl.index);

/* GET /venues/new */
router.get('/new', isLoggedIn, venuesCtrl.new);

// post/venues
router.post('/', isLoggedIn, venuesCtrl.create);







module.exports = router;
