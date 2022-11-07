var express = require('express');
var router = express.Router();
var clienteController = require ('../controllers/clienteController');
var cliente_validation = require ('../src/middleware/cliente_validation');
var authMiddleware = require ('../src/middleware/auth')

/** cadastrando novo cliente */
router.get('/create', clienteController.viewCadastro);
router.post('/create',cliente_validation, clienteController.cadastro);

// renderizando a pagina de perfil do cliente
router.get('/perfilCliente', authMiddleware, clienteController.viewPerfilCliente)

/**editar um cliente já cadastrado */
router.put('/:id/editar', authMiddleware, clienteController.editar);
router.get('/editar', authMiddleware, clienteController.viewEditar); 

/**deletar um cliente já cadastrado */
router.delete('/excluir/:id', authMiddleware, clienteController.deletar) 

module.exports = router;