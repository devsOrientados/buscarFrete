const { validationResult } = require('express-validator');
const { Usuario } = require('../database/models');
const { compareSync } = require('bcryptjs');

const loginController = {
  viewLogin: (req, res) => {
    return res.render('login', { errors: [] });
  },

  auth: async (req, res) => {
    const errors = [];
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      errors.push({ msg: 'Login ou senha inválidos' })
      return res.render('login', { errors })
    }

    const senhasIguais = compareSync(senha, usuario.senha)
    if (!senhasIguais) {
      errors.push({ msg: 'Login ou senha inválidos' })
      return res.render('login', { errors })
    }

    delete usuario.senha;

    req.session.usuario = usuario;
    console.log(usuario);
    res.redirect('/servicos');
  }
};

module.exports = loginController;