const db = require('../database/models');
const { validationResult } = require('express-validator');

const cliente = {
   async cadastro (req, res) {
      try {
         const {errors} = validationResult(req);
         if (errors.length) {
            return res.render('cadastro', {errors})
         } else {
         const {email, senha} = req.body;
         const novoUsuario = await db.Usuario.create({ email, senha});
         const {nome, sobrenome, cpf, cnh, categoria_cnh,telefone, cep, estado, cidade, bairro, logradouro, numero} =req.body;
         await db.Cliente.create({
            nome, sobrenome, cpf, cnh, categoria_cnh,telefone, cep, estado, cidade, bairro, logradouro, numero, id_usuario:novoUsuario.id_usuario});
         res.redirect('perfilCliente'); 
        }
      } catch(err){
         console.log(err);
         res.status(400).send({errors: err.message})
      }
  },

  viewCadastro: (req, res) => {
   return res.render('cadastro',{errors: []})
   },

  viewPerfilCliente: (req, res) => {
      return res.render('perfilCliente')
      },
   

   //async editar (req,res) => {
   //   try {
   //      const {errors} = validationResult(req);

  //   }
  //    catch {
  //
  //    }

  //async deletar (req,res) => {
   //   try {
   //      const {errors} = validationResult(req);

  //   }
  //    catch {
  //
  //    }
}

module.exports = cliente;