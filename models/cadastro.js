var fs = require ('fs');

async function createCadastro(cadastro){
    var cadastroArray = JSON.parse(await fs.readFile("cadastro.json"));
        
    cadastro = { id: pedidosArray.nextId++, ...cadastro };

    cadastroArray.pedidos.push(cadastro);

    await fs.writeFile("cadastro.json", JSON.stringify(cadastroArray,null, 2));

    return cadastro;
}

module.exports = createCadastro;