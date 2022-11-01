const { validationResult } = require('express-validator');

const loginController = {
    viewLogin: (req, res) =>{
        return res.render('login',{errors:[]});
    },
};

module.exports = loginController;