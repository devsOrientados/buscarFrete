const db = require('../database/models');
const { validationResult } = require('express-validator');

const createCadastro = {
   async Cadastro (req, res) {
      try {
         const {errors} = validationResult(req);
         const {email, senha} = req.body;
         const novoUsuario = await db.Usuario.create({ email, senha});
         res.render('cliente_create',{id_usuario:novoUsuario.id_usuario,errors})
        }
      catch(err){
            res.status(400).send({errors: err.message})
      }
  },

  viewCliente: (req, res) => {
   return res.render('cliente_create',{errors: []})
   },

}

module.exports = createCadastro;