var express = require('express');
var router = express.Router();
var uploadFile = require ('../src/middleware/multer');
const servicoController = require('../controllers/servicoController');
var servico_validation = require ('../src/middleware/servico_validation');

/* GET da busca de servicos */
router.get('/', servicoController.viewBuscaServico);


/* visualizacao e cadastro do veiculo */
router.get('/veiculo', servicoController.viewVeiculo);
router.post('/createVeiculo', uploadFile.fields([{name:'foto', maxCount:3}]), servicoController.cadastrarVeiculo);
//uploadFile.fields([{name:'fotoPerfil',maxCount:1},{name:'fotoVeiculo1',maxCount:1},{name:'fotoVeiculo2',maxCount:1},{name:'fotoVeiculo3',maxCount:1}]), 

/* visualizacao e cadastro do servico */
router.get('/create', servicoController.viewServico);
router.post('/createServico', servico_validation, uploadFile.single('foto_motorista'), servicoController.cadastrarServico);

module.exports = router;