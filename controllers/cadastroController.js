const db = require('../database/models');
const { validationResult } = require('express-validator');
//var  cadastroModels  = require ('../models/cadastro');

const createCadastro = {
   async Cadastro (req, res) {
      try {
         const {errors} = validationResult(req);
         const {email, senha} = req.body;
         const novoUsuario = await db.Usuario.create({ email, senha});
         res.render('cliente',{id_usuario:novoUsuario.id_usuario})
        }
      catch(err){
            res.status(400).send({error: err.message})
      }
  }
}

module.exports = createCadastro;