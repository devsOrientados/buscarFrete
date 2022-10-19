const { validationResult } = require('express-validator');
const fs = require ('fs');
const path = require('path')

const dashboardFilePath = path.join('/home/daniel/Documents/Guadalupe/projeto/buscarFrete/models/data/dashboard.json')

const dashboardController = {
    /*redenrização do formulário de cadastro*/
    viewForm: (req, res) => {
        return res.render('dashboard',{errors: []})
    },

    /*criação de um novo anuncio/dashboard do motorista json*/

    salvarForm:(req,res) => {
        const {errors} = validationResult(req);
        if (errors) {
            return res.render('dashboard', {errors})
        }
        const dashboard = JSON.parse(fs.readFileSync(dashboardFilePath,'utf-8'));
        const novoDashboard = req.body;
        const newDashboard = {id:dashboard.length +1, ...novoDashboard}
               
        dashboard.push(newDashboard);  
        //fs.writeFileSync(
        //    path.resolve('../models/data/dashboard.json'), 
        //    JSON.stringify(dashboard));
        //console.log(file) teste de onde esstá indo as imagens do forms
        res.status(201).render;
        res.redirect('/anuncio');
    }
}

module.exports = dashboardController;