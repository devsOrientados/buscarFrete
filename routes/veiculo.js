var express = require('express');
var router = express.Router();
var veiculoController = require ('../controllers/veiculoController');

router.get('/', veiculoController.viewForm);
router.post('/', veiculoController.salvarForm);

module.exports = router;