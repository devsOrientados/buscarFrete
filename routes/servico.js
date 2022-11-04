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
//uploadFile.fields([{name:'fotoPerfil',maxCount:1},{name:'fotoVeiculo1',maxCount:1},{name:'fotoVeiculo2',maxCount:1},{name:'fotoVeiculo3',maxCount:1}]), 

/* visualizacao e cadastro do servico */
router.get('/create', servicoController.viewServico);
router.post('/createServico', authMiddleware, servico_validation, uploadFile.single('foto_motorista'), servicoController.cadastrarServico);


module.exports = router;