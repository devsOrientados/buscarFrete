var express = require('express');
var router = express.Router();
var perfilController = require ('../controllers/perfilController');

router.get('/', perfilController.viewForm);
router.post('/', perfilController.salvarForm);

module.exports = router;