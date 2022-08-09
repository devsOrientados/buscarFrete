var express = require('express');
var router = express.Router();
var dashboardController = require ('../controllers/dashboardController');

/** cadastrando novo motorista */
router.get('/', dashboardController.viewForm);
router.post('/', dashboardController.salvarForm);

/**editar um motorista já cadastrado */

/**router.get('/:id/editar',dashboardController.editForm); */
/**router.put('/:id, dashboardController.editar) */


/**deletar um cadastro de motorista */
/**router.delete('/:id/excluir, dashboardController.excluir) */

module.exports = router;