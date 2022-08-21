var {promises} = require ('fs');

const insertDashboard = {
    async insert (dashboard) {
   
        var dashboardArray = JSON.parse(await promises.readFile("./models/dashboard.json"));
        
        dashboard = { id: dashboardArray.nextId++, ...dashboard };
    
        dashboardArray.motorista.push(dashboard);
    
        await promises.writeFile("./models/dashboard.json", JSON.stringify(dashboardArray,null, 2));
    
        return dashboard;
       
    }
 };

module.exports = insertDashboard; 