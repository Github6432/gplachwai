const express = require('express');
// const { requireSignIn, isAdmin, isController } = require('../middlewares/authMiddleware');
const { visitorController, officeStatusController, editofficeStatusController, getofficeStatusController } = require('../controllers/visitorController');
const { requireSignIn, isController, isAdmin } = require('../middlewares/authMiddleware');

//router object
const router = express.Router();

//Get all user //Method get
// router.get('/controller/getallusers', requireSignIn, isAdmin, getAllUsersController)
//delete user //Method post
// router.post('/deleteuser', requireSignIn, isAdmin, isController, deleteUserController)
//edit user //Method post
router.post('/visitor', visitorController)
router.post('/officestatus', requireSignIn, isController, isAdmin, officeStatusController)
router.get('/getofficestatus', getofficeStatusController)
router.post('/editofficestatus', requireSignIn, isController, isAdmin, editofficeStatusController)

module.exports = router