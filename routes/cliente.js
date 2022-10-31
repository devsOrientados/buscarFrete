var express = require('express');
var router = express.Router();
var clienteController = require ('../controllers/clienteController');
var uploadFile = require ('../src/middleware/multer');
var cliente_validation = require ('../src/middleware/cliente_validation');
var dashboardController = require ('../controllers/dashboardController');

/** novo usuário (pop-up) */
router.post("/", clienteController.Cadastro);


/** cadastrando novo cliente */
router.get('/', clienteController.viewCliente);
router.post('/create',cliente_validation, dashboardController.salvarCliente);


//uploadFile.fields([{name:'fotoPerfil',maxCount:1},{name:'fotoVeiculo1',maxCount:1},{name:'fotoVeiculo2',maxCount:1},{name:'fotoVeiculo3',maxCount:1}]), 

/**editar um cliente já cadastrado */
/**router.get('/:id/editar',dashboardController.editForm); */
/**router.put('/:id, dashboardController.editar) */


/**deletar um cliente já cadastrado */
/**router.delete('/:id/excluir, dashboardController.excluir) */



module.exports = router;