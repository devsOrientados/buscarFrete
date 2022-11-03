var express = require('express');
var router = express.Router();
const multer = require ('multer');
const servicoController = require('../controllers/servicoController');

/* GET da busca de servicos */
router.get('/', servicoController.viewBuscaServico);


/* visualizacao e cadastro do veiculo */
router.get('/veiculo', servicoController.viewVeiculo);
router.post('/createVeiculo', servicoController.cadastrarVeiculo);

/* visualizacao e cadastro do servico */
router.get('/create', servicoController.viewServico);
router.post('/createServico', servicoController.cadastrarServico);

module.exports = router;