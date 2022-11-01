const db = require('../database/models');
const { validationResult } = require('express-validator');

const cliente = {
   async Cadastro (req, res) {
      try {
         const {errors} = validationResult(req);
         if (errors.length) {
            console.log(errors);
            return res.render('cliente_create', {errors})
         } else {
         const {email, senha} = req.body;
         const novoUsuario = await db.Usuario.create({ email, senha});
         const {nome, sobrenome, cpf, cnh, categoria_cnh,telefone, cep, estado, cidade, bairro, logradouro, numero} =req.body;
         await db.Cliente.create({
            nome, sobrenome, cpf, cnh, categoria_cnh,telefone, cep, estado, cidade, bairro, logradouro, numero, id_usuario:novoUsuario.id_usuario});
         res.redirect('/',{errors});
        }
      } catch(err){
         console.log(err);
         res.status(400).send({errors: err.message})
      }
  },

  viewCliente: (req, res) => {
   return res.render('cliente_create',{errors: []})
   },

   //async Editar (req,res) => {
   //   try {
   //      const {errors} = validationResult(req);

  //   }
  //    catch {
  //
  //    }
}

module.exports = cliente;