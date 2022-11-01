const cidadesEstados = require('../models/Estados_Cidades.json');
const { validationResult } = require('express-validator');

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
};

module.exports = servicoController;