var express = require('express');
var router = express.Router();
var dashboardController = require ('../controllers/dashboardController');
var uploadFile = require ('../src/middleware/multer');
var cliente_validation = require ('../src/middleware/cliente_validation');


/** cadastrando novo cliente */
router.get('/', dashboardController.viewCliente);
router.post('/create',cliente_validation, dashboardController.salvarCliente,);

//uploadFile.fields([{name:'fotoPerfil',maxCount:1},{name:'fotoVeiculo1',maxCount:1},{name:'fotoVeiculo2',maxCount:1},{name:'fotoVeiculo3',maxCount:1}]), 
/**editar um motorista já cadastrado */

/**router.get('/:id/editar',dashboardController.editForm); */
/**router.put('/:id, dashboardController.editar) */


/**deletar um cadastro de motorista */
/**router.delete('/:id/excluir, dashboardController.excluir) */

router.get('/cadastroAnuncio', dashboardController.viewCadastroAnuncio);
router.post('/cadastroAnuncio/create', dashboardController.salvarAnuncio);

router.get('/veiculo', dashboardController.viewVeiculo);
router.post('/veiculo/create', dashboardController.salvarVeiculo);


module.exports = router;