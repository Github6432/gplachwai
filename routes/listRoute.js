const express = require('express');
const { requireSignIn, isAdmin, isController } = require('../middlewares/authMiddleware');
const { handpumpController, handpumpReportController, deleteHandPumpController } = require('../controllers/listController');

// Create router object
const router = express.Router();

// Define the route for creating a handpump entry
router.post('/controller/handpump', requireSignIn, isAdmin, handpumpController);
// Define the route for creating a handpump entry
router.post('/admin/handpump', requireSignIn, isAdmin, handpumpController);
router.post('/deletehandpumprecord', requireSignIn, isAdmin, isController, deleteHandPumpController);
router.get('/handpumpreport', requireSignIn, handpumpReportController);

module.exports = router;
