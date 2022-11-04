const cidadesEstados = require('../database/models/Estados_Cidades.json');
const { validationResult } = require('express-validator');
const db = require('../database/models');


const servicoController = {
    viewBuscaServico: (req, res) => {
        return res.render('buscaServico', { cidadesEstados, usuario: req.session.usuario });
    },
    viewServico: (req, res) => {
        return res.render('cadastroServico', { errors: [], usuario: req.session.usuario });

    },
    viewVeiculo: (req, res) => {
        return res.render('cadastroVeiculo', { errors: [], usuario: req.session.usuario });

    },


    cadastrarVeiculo: async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length) {
                return res.render('cadastroVeiculo', { errors, usuario: req.session.usuario })
            } else {
                const cliente = await db.Cliente.findOne({ where: { id_usuario: req.session.usuario.id_usuario } });
                const { modelo_veiculo, ano_veiculo, foto_veiculo1, foto_veiculo2, foto_veiculo3 } = req.body;
                await db.Veiculo.create({ modelo_veiculo, ano_veiculo, foto_veiculo1, foto_veiculo2, foto_veiculo3, id_motorista: cliente.id_cliente });
                res.redirect('/clientes/perfilCliente');
            }
        } catch (err) {
            res.status(400).send({ error: err.message });
        };
    },

    cadastrarServico: async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (errors.length) {
                return res.render('cadastroServico', { errors, usuario: req.session.usuario })
            } else {
                const cliente = await db.Cliente.findOne({ where: { id_usuario: req.session.usuario.id_usuario } });
                console.log(cliente);
                console.log(req.body);
                const { tipo_viagem, auto_descricao, foto_motorista, preco } = req.body;
                const veiculo = await db.Veiculo.findOne({ where: { id_motorista: cliente.id_cliente } });
                console.log(veiculo);
                await db.Servico.create({ tipo_viagem, auto_descricao, foto_motorista, preco, id_cliente: cliente.id_cliente, id_veiculo: veiculo.id_veiculo });
                res.redirect('/clientes/perfilCliente')
            }
        } catch (err) {
            res.status(400).send({ error: err.message });
        };
    },
};

module.exports = servicoController;