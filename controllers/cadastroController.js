var  cadastroModels  = require ('../models/cadastro');

const createCadastro= {
   cadastro:(req,res) => {
      let cadastro = req.body;

      cadastro = await cadastroModels.createCadastro(cadastro);
      res.send(cadastro);
    }
}

module.exports = createCadastro;