var express = require('express');
var router = express.Router();
const loginController = require('../controllers/loginController');
var authMiddleware = require ('../src/middleware/auth');
/* pagina de login*/
router.get('/', loginController.viewLogin);
router.post('/', loginController.auth);

router.get('/logout', authMiddleware, loginController.logout);

module.exports = router;