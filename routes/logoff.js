var express = require('express');
var router = express.Router();
const logoffController = require('../controllers/logoffController');

/* pagina de logoff*/
router.get('/', logoffController.viewLogin);

module.exports = router;