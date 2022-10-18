const express = require('express');
const router = express.Router();

const motoristasController = require('../controllers/motoristasController');

router.get('/', motoristasController.index);

module.exports = router;