var express = require('express');
var router = express.Router();
const servicoController = require('../controllers/servicoController');

/* GET da busca de servicos */
router.get('/', servicoController.viewBuscaServico);


/* visualizacao e cadastro do servico */
router.get('/create', servicoController.viewServico);
//router.post('/createVeiculo', servicoController.cadastroServico);

/* visualizacao e cadastro do veiculo */
router.get('/veiculo', servicoController.viewVeiculo);
//router.post('/createVeiculo', servicoController.cadastroVeiculo);

module.exports = router;