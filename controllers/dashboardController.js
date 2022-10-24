const { validationResult } = require('express-validator');
const fs = require ('fs');
const path = require('path');
const db = require ('../database/models');

const dashboardController = {
    /*redenrização do formulário de cadastro*/
    viewCliente: (req, res) => {
        return res.render('cliente',{errors: []})
    },

    viewCadastroAnuncio: (req, res) => {
        return res.render('cadastroAnuncio',{errors: []})
    },
    viewVeiculo: (req, res) => {
        return res.render('veiculo',{errors: []})
    },

    /*criação de um novo cliente(motorista) no bd*/

    salvarCliente: async(req,res) => {
        try {
           const {errors} = validationResult(req);
           if (!errors.isEmpty) {
               return res.render('cliente', {errors})
            } else {
            const {nome, sobrenome, cpf, cnh, categoria_cnh,telefone, cep, estado, cidade, bairro, logradouro, numero} =req.body;
            const novoCliente = await db.Cliente.create({
                nome, sobrenome, cpf, cnh, categoria_cnh,telefone, cep, estado, cidade, bairro, logradouro, numero
            });
            res.render('cadastroAnuncio',{id_cliente:novoCliente.id_cliente});
            }
        } catch (err) {
            res.status(400).send({error: err.message});
        };
    },
    
    salvarAnuncio: async(req,res) => {
        try {
            const {errors} = validationResult(req);
            if (!errors.isEmpty) {
                return res.render('cadastroAnuncio', {errors})
             } else {
            const novoAnuncio = {servico, autodescricao, fotoPerfil, preco} = req.body;
            await db.Anuncio.create({servico, autodescricao, fotoPerfil, preco});
            res.render('veiculo',{id_motorista:novoAnuncio.id_cliente})
        }
        } catch (err) {
            res.status(400).send({error: err.message});
        };
    },

    salvarVeiculo: async(req,res) => {
        try {
            const {errors} = validationResult(req);
            if (!errors.isEmpty) {
                return res.render('veiculo', {errors})
             } else {
                const {veiculo,anoVeiculo,fotoVeiculo1, fotoVeiculo2, fotoVeiculo3}=req.body;
                await db.Veiculo.create({veiculo,anoVeiculo,fotoVeiculo1,fotoVeiculo2, fotoVeiculo3});
                res.render('perfildomotorista');
             }
             } catch (err) {
               res.status(400).send({error: err.message});
        };
    },
    

        
}


module.exports = dashboardController;