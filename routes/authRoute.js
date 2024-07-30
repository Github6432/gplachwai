const express = require('express');
const { registerController, loginController, forgetPasswordController, testController } = require('../controllers/authControllers');
const { requireSignIn, isAdmin, isController } = require('../middlewares/authMiddleware');

//router object
const router = express.Router();

//Register //Method POST
router.post('/register', registerController)
//Login //Method POST
router.post('/login', loginController)
router.post('/forgetpassword', forgetPasswordController)
//test access
router.post('/testa',requireSignIn, isAdmin, testController)

//test access
router.post('/testc',requireSignIn, isAdmin, isController, testController)

module.exports = router