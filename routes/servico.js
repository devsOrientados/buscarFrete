var express = require('express');
var router = express.Router();
var servicoController = require ('../controllers/servicoController');

router.get('/', servicoController.viewForm);
router.post('/', servicoController.salvarForm);

module.exports = router;