const express = require('express');
const { register, signin } = require('../controller/auth');
const { requireSignin } = require('../middleware');
const router = express.Router();
const { validateSignupRequest, validateSigninRequest, isRequestValidated } = require('../validators/auth');


router.post("/register",validateSignupRequest, isRequestValidated, register);
router.post("/login", validateSigninRequest, isRequestValidated, signin);

module.exports = router;