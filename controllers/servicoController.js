const cidadesEstados = require('../database/models/Estados_Cidades.json');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const { Op } = require('sequelize');


const servicoController = {
    viewBuscaServico: async (req, res) => {
        const cliente = await db.Cliente.findOne({where: {id_usuario: req.session.usuario.id_usuario}});
        const servicos = await db.Servico.findAll({
            where: {
                id_cliente:{[Op.not]: cliente.id_cliente}
                }
            });
        return res.render('buscaServico', { servicos, cidadesEstados, usuario: req.session.usuario });
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
                const { modelo_veiculo, ano_veiculo } = req.body;
                const fotosVeiculos = req.files.map( file => file.filename);
                await db.Veiculo.create({
                    modelo_veiculo,
                    ano_veiculo,
                    foto_veiculo1: fotosVeiculos[0],
                    foto_veiculo2: fotosVeiculos[1],
                    foto_veiculo3: fotosVeiculos[2],
                    id_motorista: cliente.id_cliente
                });
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