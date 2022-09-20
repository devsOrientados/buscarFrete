var express = require('express');
var router = express.Router();
const anuncioController = require('../controllers/anuncioController');

/* GET home page. */
router.get('/', anuncioController.anuncio);

module.exports = router;

