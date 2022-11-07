const cidadesEstados = require('../database/models/Estados_Cidades.json');
const { validationResult } = require('express-validator');
const db = require('../database/models');
const { Op } = require('sequelize');


const servicoController = {
    viewBuscaServico: async (req, res) => {
        const {estado, cidade}= req.query;
        const cliente = await db.Cliente.findOne({ where: { id_usuario: req.session.usuario.id_usuario } });
        const servicos = await db.Servico.findAll({
            include: {model: db.Cliente, as:'cliente', where: {
                estado: estado || cliente.estado,
                cidade: cidade || cliente.cidade
            }},
            where: {
                id_cliente: { [Op.not]: cliente.id_cliente },   
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
                const fotosVeiculos = req.files.map(file => file.filename);
                console.log(fotosVeiculos)
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
            // if (errors.length) {
            //       return res.render('cadastroServico', { errors, usuario: req.session.usuario })
            // } else {
                const cliente = await db.Cliente.findOne({ where: { id_usuario: req.session.usuario.id_usuario } });
                const { tipo_viagem, auto_descricao, preco } = req.body;
                const foto_motorista = req.file.filename;
                const veiculo = await db.Veiculo.findOne({ where: { id_motorista: cliente.id_cliente } });
                await db.Servico.create({ 
                    tipo_viagem, 
                    auto_descricao, 
                    foto_motorista: foto_motorista, 
                    preco, 
                    id_cliente: cliente.id_cliente, 
                    id_veiculo: veiculo.id_veiculo });
                res.redirect('/clientes/perfilCliente')
            //   }
        } catch (err) {
            res.status(400).send({ error: err.message });
        };
    },
    
    viewDetalhe: async (req,res) =>{
        try{
            const { errors } = validationResult(req);
            if (errors.length) {
                  return res.render('detalheServico', { errors, usuario: req.session.usuario })
             } else {
            const id_servico = req.params.id;
            const servico = await db.Servico.findOne(
                { include:[ 
                    {model: db.Veiculo, as:'veiculo'}, 
                    {model:db.Cliente, as:'cliente'}
                ],
                    where: { id_servico } });
            res.render('detalheServico', { usuario: req.session.usuario, servico })
             }
        } catch (err) {
            res.status(400).send({ error: err.message });
        };
    },

    viewContratarServico: async (req,res) => {
        try{
            const { errors } = validationResult(req);
            if (errors.length) {
                  return res.render('contratarServico', { errors, usuario: req.session.usuario })
             } else {
            const {id_servico} = req.params;
            const servico = await db.Servico.findOne(
                {include:[ 
                    {model: db.Veiculo, as:'veiculo'}, 
                    {model: db.Cliente, as:'cliente'}
                ],
                where: { id_servico } });
            const cliente_contratante = await db.Cliente.findOne({where:{id_usuario:req.session.usuario.id_usuario}});
            res.render('contratarServico', { usuario: req.session.usuario, cliente_contratante, servico })
             }
        } catch (err) {
            res.status(400).send({ error: err.message });
        };
    },

    contratarServico: async(req,res) => {
        try{
            const { errors } = validationResult(req);
            if (errors.length) {
                  return res.render('detalheServico', { errors, usuario: req.session.usuario })
             } else {
            const {distancia, data_frete, horario}= req.body;
            const {id_servico} = req.params;
            const servico = await db.Servico.findOne({ where: { id_servico  } });
            const cliente_contratante = await db.Cliente.findOne({where:{id_usuario:req.session.usuario.id_usuario}});
            await db.ServicoContratado.create({ 
                id_cliente_contratante: cliente_contratante.id_cliente,
                id_servico:servico.id_servico, 
                distancia, 
                data_viagem: new Date(data_frete+'T00:00'),
                preco_final:distancia * servico.preco,
                horario });
            res.redirect('/clientes/perfilCliente')
             }
        } catch (err) {
            res.status(400).send({ error: err.message });
        };
    }

}


module.exports = servicoController;