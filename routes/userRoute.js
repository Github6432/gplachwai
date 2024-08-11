const express = require('express');
const { requireSignIn, isAdmin, isController } = require('../middlewares/authMiddleware');
const { getAllUsersController, deleteUserController, editUserController } = require('../controllers/userController');
// const { testController } = require('../controllers/authControllers');

//router object
const router = express.Router();

//Get all user //Method get
router.get('/controller/getallusers', requireSignIn, isAdmin, getAllUsersController)
//delete user //Method post
router.post('/deleteuser', requireSignIn, isController, isAdmin, deleteUserController)
//edit user //Method post
router.post('/edituser',requireSignIn, isAdmin, editUserController)

module.exports = router
