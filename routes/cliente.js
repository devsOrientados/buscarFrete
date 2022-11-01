var express = require('express');
var router = express.Router();
var clienteController = require ('../controllers/clienteController');
var uploadFile = require ('../src/middleware/multer');
var cliente_validation = require ('../src/middleware/cliente_validation');

/** novo usuário (pop-up) */
//router.post("/", clienteController.Cadastro);


/** cadastrando novo cliente */
router.get('/create', clienteController.viewCadastro);
router.post('/create',cliente_validation, clienteController.cadastro);

router.get('/perfilCliente', clienteController.viewPerfilCliente)
//uploadFile.fields([{name:'fotoPerfil',maxCount:1},{name:'fotoVeiculo1',maxCount:1},{name:'fotoVeiculo2',maxCount:1},{name:'fotoVeiculo3',maxCount:1}]), 

/**editar um cliente já cadastrado */
//router.get('/:id/editar',clienteController.editar); 
//router.put('/:id/editar', clienteController.editar);


/**deletar um cliente já cadastrado */
/**router.delete('/:id/excluir, clienteController.excluir) */



module.exports = router;