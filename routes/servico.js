var express = require('express');
var router = express.Router();
var uploadFile = require ('../src/middleware/multer');
const servicoController = require('../controllers/servicoController');
var servico_validation = require ('../src/middleware/servico_validation');
var authMiddleware = require ('../src/middleware/auth');

/* GET da busca de servicos */
router.get('/', authMiddleware, servicoController.viewBuscaServico);


/* visualizacao e cadastro do veiculo */
router.get('/veiculo', authMiddleware, servicoController.viewVeiculo);
router.post('/createVeiculo', authMiddleware, servicoController.cadastrarVeiculo);

/* visualizacao e cadastro do servico */
router.get('/create', authMiddleware, servicoController.viewServico);
router.post('/createServico', authMiddleware, servico_validation, servicoController.cadastrarServico);

module.exports = router;