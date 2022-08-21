var fs = require ('fs');

async function createCadastro(cadastro){
        var cadastroArray = JSON.parse(await promises.readFile("./models/cadastro.json"));
        cadastro = { id: cadastroArray.nextId++, ...cadastro };
        cadastroArray.motorista.push(cadastro);
        await fs.writeFile("cadastro.json", JSON.stringify(cadastroArray,null, 2));
        return cadastro;  
    };

module.exports = createCadastro; 