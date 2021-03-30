const express = require('express');
const router = express.Router();
const venuesCtrl = require('../controllers/venues')

//get /venues
router.get('/', venuesCtrl.index);

/* GET /venues/new */
router.get('/new', venuesCtrl.new);

// post/venues
router.post('/', venuesCtrl.create);

module.exports = router;
