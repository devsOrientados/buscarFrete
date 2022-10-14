var express = require('express');
var router = express.Router();
var dashboardController = require ('../controllers/dashboardController');
var multer = require ('multer')

/** configurando o multer para receber as imagens */
const storage = multer.diskStorage ({
    destination: function (req, file, cb) {
        cb(null, __dirname+'../public/images/profile')
    },
    filename: function (req, file, cb) {
        cb(null,`${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})
const uploadFile = multer ({storage});

/** cadastrando novo motorista */
router.get('/', dashboardController.viewForm);
router.post('/create', 
        uploadFile.array(['fotoPerfil','fotoVeiculo1','fotoVeiculo2','fotoVeiculo3']), 
        dashboardController.salvarForm);

/**editar um motorista já cadastrado */

/**router.get('/:id/editar',dashboardController.editForm); */
/**router.put('/:id, dashboardController.editar) */


/**deletar um cadastro de motorista */
/**router.delete('/:id/excluir, dashboardController.excluir) */

module.exports = router;