const express = require('express');
const { login } = require('../controllers/login');
const { me } = require('../controllers/me');
const { auth } = require('../middlewares/auth');

const router = express.Router();

router.post('/login', login);
router.get('/users/me', auth, me);

module.exports = router;
