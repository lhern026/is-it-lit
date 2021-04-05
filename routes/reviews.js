const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const isLoggedIn = require('../config/auth');

// post venues/:id/reviews
router.post('/venues/:id/reviews', isLoggedIn, reviewsCtrl.create);


router.delete('/reviews/:id', isLoggedIn, reviewsCtrl.delete);

router.put('/reviews/:id', isLoggedIn, reviewsCtrl.update);

router.get('/reviews/:id/edit', isLoggedIn, reviewsCtrl.edit);






module.exports = router;
