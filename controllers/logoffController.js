const { validationResult } = require('express-validator');
const { Usuario } = require('../database/models');
const { compareSync } = require('bcryptjs');

const logoffController = {
  viewLogin: (req, res) => {
    return res.render('login', { errors: [] });
  }
};

module.exports = logoffController;