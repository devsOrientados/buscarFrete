var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');

/* pagina de login*/
router.get('/', loginController.viewLogin);
router.post('/', loginController.auth);


module.exports = router;