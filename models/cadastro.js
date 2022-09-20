var {promises} = require ('fs');

const insertCadastro = {
    async insert (cadastro) {
   
        var cadastroArray = JSON.parse(await promises.readFile("./models/data/cadastro.json"));
        
        cadastro = { id: cadastroArray.nextId++, ...cadastro };
    
        cadastroArray.motorista.push(cadastro);
    
        await promises.writeFile("./models/data/cadastro.json", JSON.stringify(cadastroArray,null, 2));
    
        return cadastro;
       
    }
 };

module.exports = insertCadastro; 