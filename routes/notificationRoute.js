const express = require('express');
const { requireSignIn, isAdmin, isController } = require('../middlewares/authMiddleware');
const { notificationController, getNotificationController } = require('../controllers/notificationController');

//router object
const router = express.Router();

//Get all user //Method get
// router.get('/controller/getallusers', requireSignIn, isAdmin, getAllUsersController)
//delete user //Method post
// router.post('/deleteuser', requireSignIn, isAdmin, isController, deleteUserController)
//edit user //Method post
router.post('/controller/notification',requireSignIn, isController, isAdmin, notificationController)
router.get('/notification', requireSignIn, getNotificationController)

module.exports = router