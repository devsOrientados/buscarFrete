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