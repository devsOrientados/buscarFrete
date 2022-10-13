const fs = require ('fs');
const path = require('path')

const dashboardFilePath = path.join('/home/daniel/Documents/Guadalupe/projeto/buscarFrete/models/data/dashboard.json')

const dashboardController = {
    /*redenrização do formulário de cadastro*/
    viewForm: (req, res) => {
        return res.render('dashboard')
    },

    /*criação de um novo anuncio/dashboard do motorista json*/

    salvarForm:(req,res) => {
    
        const dashboard = JSON.parse(fs.readFileSync(dashboardFilePath,'utf-8'));
        const novoDashboard = req.body;
        const newDashboard = {id:dashboard.length +1, ...novoDashboard}
               

        dashboard.push(newDashboard);  
        fs.writeFileSync(
            path.resolve('../models/data/dashboard.json'), 
            JSON.stringify(dashboard));

        res.status(201).render;
        res.redirect('/anuncio.js');
    }
}

module.exports = dashboardController;