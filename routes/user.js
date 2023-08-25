const express = require('express');
const router = express.Router();
const user = require('../controllers/user');

router.route('/register')
    .get(user.registerUser);

router.route('/login')
    .get(user.loginUser);
    
module.exports = router;