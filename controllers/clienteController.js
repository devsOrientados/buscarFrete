const db = require('../database/models');
const { validationResult } = require('express-validator');
const { hashSync } = require('bcryptjs');

const cliente = {
   // rederizando o formualrio de cadatro de cliente
   viewCadastro: (req, res) => {
      return res.render('cadastro', { errors: [], usuario: req.session.usuario })
   },

   // criando novo usuario e cliente
   async cadastro(req, res) {
      try {
         const { errors } = validationResult(req);
         if (errors.length) {
            return res.render('cadastro', { errors, usuario: req.session.usuario })
         } else {
            const { email, senha } = req.body;
            const senhaEncriptada = hashSync(senha, 12);
            const novoUsuario = await db.Usuario.create({ email, senha: senhaEncriptada });
            const { nome, sobrenome, cpf, cnh, categoria_cnh, telefone, cep, estado, cidade, bairro, logradouro, numero } = req.body;
            await db.Cliente.create({
               nome, sobrenome, cpf, cnh, categoria_cnh, telefone, cep, estado, cidade, bairro, logradouro, numero, id_usuario: novoUsuario.id_usuario
            });
            res.redirect('/login');
         }
      } catch (err) {
         res.status(400).send({ errors: err.message })
      }
   },
   // rederizando a pagina de Perfil do Cliente
   viewPerfilCliente: async (req, res) => {
      const cliente = await db.Cliente.findOne({ where: { id_usuario: req.session.usuario.id_usuario } })
      const veiculo = await db.Veiculo.findAll({ where: { id_motorista: cliente.id_cliente } })
      const servico = await db.Servico.findAll({ where: { id_cliente: cliente.id_cliente } })
      return res.render('perfilCliente', { usuario: req.session.usuario, cliente, veiculo, servico })
   },

   // editando cliente cadastrado
   async viewEditar(req, res) {
      try {
         const { errors } = validationResult(req);
         if (errors.length) {
            return res.render('cadastroEdit', { errors, usuario: req.session.usuario });
         } else {
            const usuario = await db.Usuario.findOne({ where: { id_usuario: req.session.usuario.id_usuario } });
            console.log (usuario);
            const cliente = await db.Cliente.findOne({ where: { id_cliente: usuario.id_usuario } });
            console.log(cliente);
            return res.render('cadastroEdit', { errors, usuario, cliente });
         };
      }
      catch {
         res.status(400).send({ errors: err.message });
      }
   },

   async editar(req, res) {
      try {
         const { errors } = validationResult(req);
         if (errors.length) {
            return res.render('cadastroEdit', { errors, usuario: req.session.usuario })
         } else {
            const { email, senha } = req.body;
            const senhaEncriptada = hashSync(senha, 12);
            const usuario = await db.Usuario.update({ email, senha: senhaEncriptada },
               { where: { id_usuario: req.params.id } });
            console.log (usuario)
            const { nome, sobrenome, cpf, cnh, categoria_cnh, telefone, cep, estado, cidade, bairro, logradouro, numero } = req.body;
            await db.Cliente.update({
               nome, sobrenome, cpf, cnh, categoria_cnh, telefone, cep, estado, cidade, bairro, logradouro, numero, id_usuario: usuario.id_usuario },
               { where: { id_usuario: usuario.id_usuario } });
               return res.render('perfilCliente', { usuario: req.session.usuario, cliente, veiculo, servico })
         }
      } catch (err) {
         res.status(400).send({ errors: err.message })
      }
   },

   async deletar(req, res) {
      try {
         const { errors } = validationResult(req);
         if (errors.length) {
            return res.render('cadastroEdit', { errors, usuario: req.session.usuario })
         } else {
            await db.Cliente.destroy({ where: { id_cliente: usuario.id_usuario } });
            await db.Usuario.destroy({ where: { id_usuario: req.session.usuario } });
            return res.redirect ('/');
         }
      } catch (err) {
         res.status(400).send({ errors: err.message })
      }
   }

};

module.exports = cliente;