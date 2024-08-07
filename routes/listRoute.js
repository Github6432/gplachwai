const express = require('express');
const { requireSignIn, isAdmin } = require('../middlewares/authMiddleware');
const { handpumpController } = require('../controllers/listController');

// Create router object
const router = express.Router();

// Define the route for creating a handpump entry
router.post('/handpump', requireSignIn, isAdmin, handpumpController);

module.exports = router;
