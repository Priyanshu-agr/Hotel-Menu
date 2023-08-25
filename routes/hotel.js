const express = require('express');
const router = express.Router();
const hotel = require('../controllers/hotel');

router.route('/')
    .get(hotel.hotelMenu);

module.exports = router;
