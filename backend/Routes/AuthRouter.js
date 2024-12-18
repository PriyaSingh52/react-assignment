const express = require('express');
const router = express.Router(); // Properly initialize the router
const { signup, login } = require('../Controllers/AuthController');
const { signupValidation, loginValidation } = require('../Middlewares/AuthValidation');


router.post('/login', loginValidation, login);
router.post('/signup', signupValidation, signup);

module.exports = router;
