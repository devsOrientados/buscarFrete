var express = require('express');
var router = express.Router();
var dashboardController = require ('../controllers/dashboardController');
var uploadFile = require ('../src/middleware/multer');
var dashboard_validation = require ('../src/middleware/dashboard_validation');


/** cadastrando novo motorista */
router.get('/', dashboardController.viewForm);
router.post('/create',dashboard_validation, 
        uploadFile.array(['fotoPerfil','fotoVeiculo1','fotoVeiculo2','fotoVeiculo3']), 
        dashboardController.salvarForm);

/**editar um motorista já cadastrado */

/**router.get('/:id/editar',dashboardController.editForm); */
/**router.put('/:id, dashboardController.editar) */


/**deletar um cadastro de motorista */
/**router.delete('/:id/excluir, dashboardController.excluir) */

module.exports = router;