const cidadesEstados = require('../models/Estados_Cidades.json');
const { validationResult } = require('express-validator');
const db = require ('../database/models');


const servicoController = {
    viewBuscaServico: (req, res) =>{
        return res.render('buscaServico',{cidadesEstados});
    },
    viewServico:(req, res) => {
        return res.render('cadastroServico',{errors: []});

    },
    viewVeiculo:(req, res) => {
        return res.render('cadastroVeiculo',{errors: []});

    },
 // ajustar as foreignKey de acordo com o modelo
    cadastrarServico: async(req,res) => {
        try {
            const {errors} = validationResult(req);
            if (!errors.isEmpty) {
                return res.render('cadastroServico', {errors})
             } else {
            const novoAnuncio = {servico, autodescricao, fotoPerfil, preco} = req.body;
            await db.Anuncio.create({servico, autodescricao, fotoPerfil, preco});
            res.render('veiculo',{id_motorista:novoAnuncio.id_cliente})
        }
        } catch (err) {
            res.status(400).send({error: err.message});
        };
    },

 // ajustar as foreignKey de acordo com o modelo
    cadastratVeiculo: async(req,res) => {
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
};

module.exports = servicoController;