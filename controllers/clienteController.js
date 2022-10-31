const db = require('../database/models');
const { validationResult } = require('express-validator');

const createCadastro = {
   async Cadastro (req, res) {
      try {
         const {errors} = validationResult(req);
         if (!errors.isEmpty) {
            return res.render('cliente_create', {errors})
         } else {
         const {email, senha} = req.body;
         const novoUsuario = await db.Usuario.create({ email, senha});
         const {nome, sobrenome, cpf, cnh, categoria_cnh,telefone, cep, estado, cidade, bairro, logradouro, numero} =req.body;
         const novoCliente = await db.Cliente.create({
            nome, sobrenome, cpf, cnh, categoria_cnh,telefone, cep, estado, cidade, bairro, logradouro, numero, id_usuario:novoUsuario.id_usuario});
         res.render('cliente_create',{errors})
        }
      } catch(err){
        res.status(400).send({errors: err.message})
      }
  },

  viewCliente: (req, res) => {
   return res.render('cliente_create',{errors: []})
   },

}

module.exports = createCadastro;