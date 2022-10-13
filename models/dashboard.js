const fs = require ('fs');
const path = require('path')


const dashboard = JSON.parse(fs.readFileSync(dashboardFilePath,'utf-8'));
const novoDashboard = req.body;
const newDashboard = {id:dashboard.length +1, ...novoDashboard}
       

dashboard.push(newDashboard);  
fs.writeFileSync(
    path.resolve('../buscarFrete/models/data/dashboard.json'), 
    JSON.stringify(dashboard));

