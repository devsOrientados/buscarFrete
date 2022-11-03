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
            if (!errors.isEmpty) {
                return res.render('cadastroVeiculo', { errors, usuario: req.session.usuario })
            } else {
                const { modelo_veiculo, ano_veiculo, foto_veiculo1, foto_veiculo2, foto_veiculo3 } = req.body;
                const cliente = await db.Cliente.findOne({ where: { id_usuario: req.session.usuario.id_usuario } })
                await db.Veiculo.create({ modelo_veiculo, ano_veiculo, foto_veiculo1, foto_veiculo2, foto_veiculo3, id_motorista: cliente.id_cliente });
                res.render('perfilCliente', { usuario: req.session.usuario });
            }
        } catch (err) {
            res.status(400).send({ error: err.message });
        };
    },

    cadastrarServico: async (req, res) => {
        try {
            const { errors } = validationResult(req);
            if (!errors.isEmpty) {
                return res.render('cadastroServico', { errors, usuario: req.session.usuario })
            } else {
                const { tipo_viagem, auto_descricao, foto_motorista, preco } = req.body;
                const cliente = await db.Cliente.findOne({ where: { id_usuario: req.session.usuario.id_usuario } });
                const veiculo = await db.Veiculo.findOne({ where: { id_cliente: cliente.id_cliente } })
                await db.Anuncio.create({ tipo_viagem, auto_descricao, foto_motorista, preco, id_cliente: cliente.id_cliente, id_veiculo: veiculo.id_veiculo });
                res.render('cadastroServico', { usuario: req.session.usuario })
            }
        } catch (err) {
            res.status(400).send({ error: err.message });
        };
    },
};

module.exports = servicoController;