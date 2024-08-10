const express = require('express');
// const { requireSignIn, isAdmin, isController } = require('../middlewares/authMiddleware');
const { visitorController } = require('../controllers/visitorController');

//router object
const router = express.Router();

//Get all user //Method get
// router.get('/controller/getallusers', requireSignIn, isAdmin, getAllUsersController)
//delete user //Method post
// router.post('/deleteuser', requireSignIn, isAdmin, isController, deleteUserController)
//edit user //Method post
router.post('/visitor', visitorController)

module.exports = router