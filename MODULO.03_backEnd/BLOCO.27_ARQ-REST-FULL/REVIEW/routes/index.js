const express = require('express');
const { carCreate } = require('../controllers/cars.controllers');

const router = express.Router();

router.post('/cars', carCreate);

module.exports = router;
