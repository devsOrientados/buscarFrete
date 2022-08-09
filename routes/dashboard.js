var express = require('express');
var router = express.Router();
var dashboardController = require ('../controllers/dashboardController');

router.get('/', dashboardController.viewForm);
router.post('/', dashboardController.salvarForm);

module.exports = router;