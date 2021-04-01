const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');
const isLoggedIn = require('../config/auth');

// post venues/:id/comments
router.post('/venues/:id/reviews', isLoggedIn, reviewsCtrl.create);






module.exports = router;
