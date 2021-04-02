const express = require('express');
const router = express.Router();
const venuesCtrl = require('../controllers/venues');
const isLoggedIn = require('../config/auth');

//get /venues
router.get('/', venuesCtrl.index);

/* GET /venues/new */
router.get('/new', isLoggedIn, venuesCtrl.new);
// get /venues/:id
router.get('/:id', isLoggedIn, venuesCtrl.show);
// post/venues
router.post('/', isLoggedIn, venuesCtrl.create);

// //put /venues/:id
// router.put('/:id', isLoggedIn, venuesCtrl.update);

//delete /venues/:id 
router.delete('/:id', isLoggedIn, venuesCtrl.delete);








module.exports = router;
