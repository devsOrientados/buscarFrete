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
router.post('/createVeiculo', authMiddleware, uploadFile.array('fotos_veiculos', 3), servicoController.cadastrarVeiculo);
 

/* visualizacao e cadastro do servico */
router.get('/create', servicoController.viewServico);
router.post('/createServico', authMiddleware, servico_validation, uploadFile.single('foto_motorista'), servicoController.cadastrarServico);

/* visualizacao dos detalhes do motorista*/
router.get('/detalhe/:id', authMiddleware, servicoController.viewDetalhe);

/* visualizacao da pagina de contratar servico*/
router.get('/contratar/:id_servico', authMiddleware, servicoController.viewContratarServico);
router.post('/contratar/:id_servico', authMiddleware, servicoController.contratarServico);

module.exports = router;