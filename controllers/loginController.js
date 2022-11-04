const { validationResult } = require('express-validator');
const { Usuario } = require('../database/models');
const { compareSync } = require('bcryptjs');

const loginController = {
  viewLogin: (req, res) => {
    return res.render('login', { errors: [],usuario:req.session.usuario });
  },

  auth: async (req, res) => {
    const errors = [];
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      errors.push({ msg: 'Login ou senha inválidos' })
      return res.render('login', { errors,usuario:req.session.usuario })
    }

    const senhasIguais = compareSync(senha, usuario.senha)
    if (!senhasIguais) {
      errors.push({ msg: 'Login ou senha inválidos' })
      return res.render('login', { errors,usuario:req.session.usuario })
    }

    delete usuario.senha;

    req.session.usuario = usuario;
    console.log(usuario);
    res.redirect('/servicos');
  },

  logout: async (req,res) => {
    //programar a logica do logoff
    if (req.session.usuario && req.session.usuario.email) {
      delete req.session.usuario;
    }
    return res.redirect('/')
  }
};

module.exports = loginController;