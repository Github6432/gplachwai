const express = require('express');
const { registerController, loginController, forgetPasswordController } = require('../controllers/authControllers');

//router object
const router = express.Router();

//Register //Method POST
router.post('/register', registerController)
//Login //Method POST
router.post('/login', loginController)
router.post('/forgetpassword', forgetPasswordController)

module.exports = router