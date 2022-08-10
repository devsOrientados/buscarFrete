var express = require('express');
var router = express.Router();
var cadastroController = require ('../controllers/cadastroController');



router.post('/', cadastroController.cadastro);

module.exports = router;