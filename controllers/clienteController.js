const db = require('../database/models');
const { validationResult } = require('express-validator');
const { hashSync } = require('bcryptjs');

const cliente = {
   async cadastro (req, res) {
      try {
         const {errors} = validationResult(req);
         if (errors.length) {
            return res.render('cadastro', {errors, usuario:req.session.usuario})
         } else {
         const {email, senha} = req.body;
         const senhaEncriptada = hashSync(senha, 12);
         const novoUsuario = await db.Usuario.create({ email, senha: senhaEncriptada});
         console.log(novoUsuario);
         const {nome, sobrenome, cpf, cnh, categoria_cnh,telefone, cep, estado, cidade, bairro, logradouro, numero} =req.body;
         const novoCliente = await db.Cliente.create({
            nome, sobrenome, cpf, cnh, categoria_cnh,telefone, cep, estado, cidade, bairro, logradouro, numero, id_usuario:novoUsuario.id_usuario});
            res.redirect('/login'); 
        }
      } catch(err){
         console.log(err);
         res.status(400).send({errors: err.message})
      }
  },

  viewCadastro: (req, res) => {
   return res.render('cadastro',{errors: [],usuario:req.session.usuario})
   },

  viewPerfilCliente: async (req, res) => {
      const cliente = await db.Cliente.findOne({where: {id_usuario:req.session.usuario.id_usuario}})
      return res.render('perfilCliente',{usuario:req.session.usuario, cliente})
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
};

module.exports = cliente;