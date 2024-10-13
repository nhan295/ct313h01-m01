const express = require('express');
const { signup, login } = require('../controllers/userController');
const router = express.Router();

// POST /api/v1/users/signup
router.post('/signup', signup);

// POST /api/v1/users/login
router.post('/login', login);

module.exports = router;
