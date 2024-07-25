const express = require('express');
const { registerController } = require('../controllers/authControllers');

//router object
const router = express.Router();

//Register //Method POST
router.post('/register', registerController)

module.exports = router