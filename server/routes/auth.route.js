const express = require('express');
const authController = require('../controllers/auth.controller')
const router = express.Router();

router.post('/register', authController.register);
router.post('/signin', authController.signin);

module.exports = router;