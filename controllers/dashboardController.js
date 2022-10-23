const { validationResult } = require('express-validator');
const fs = require ('fs');
const path = require('path');
const db = require ('../database/models');
//const { Anuncio } = require ('../database/models');
//const { Veiculo } = require ('../database/models');

//const dashboardFilePath = path.join('/home/daniel/Documents/Guadalupe/projeto/buscarFrete/models/data/dashboard.json')

const dashboardController = {
    /*redenrização do formulário de cadastro*/
    viewForm: (req, res) => {
        return res.render('dashboard',{errors: []})
    },

    /*criação de um novo anuncio/dashboard do motorista bd*/

    salvarForm: async(req,res) => {
        try {
        const {errors} = validationResult(req);
        if (errors) {
            return res.render('dashboard', {errors})
        };

        const {nome, sobrenome, cpf, cnh, categoria,telefone, cep, estado, cidade, bairro, logradouro, numero} =req.params;
        await db.Cliente.create({
            nome, sobrenome, cpf, cnh, categoria,telefone, cep, estado, cidade, bairro, logradouro, numero
        });
        const {servico, autodescricao, fotoPerfil, preco} = req.params;
        await db.Anuncio.create({
            servico, autodescricao, fotoPerfil, preco
        });
        const {veiculo,anoVeiculo,fotoVeiculo1, fotoVeiculo2, fotoVeiculo3}=req.params;
        await db.Veiculo.create({
            veiculo,anoVeiculo,fotoVeiculo1,fotoVeiculo2, fotoVeiculo3        
        })} catch (err) {
            return res.render('dashboard', {errors: [err.message]})
        }

        res.render('/dashboard',res.status);
        res.status(201).render;
    }
}

//const dashboard = JSON.parse(fs.readFileSync(dashboardFilePath,'utf-8'));
//const newDashboard = {id:dashboard.length +1, ...novoDashboard}
//dashboard.push(newDashboard);  
//fs.writeFileSync(
//    path.resolve('../models/data/dashboard.json'), 
//    JSON.stringify(dashboard));
//console.log(file) teste de onde está indo as imagens do forms

module.exports = dashboardController;