var  cadastroModels  = require ('../models/cadastro');

const createCadastro = {
   async Cadastro (req, res) {
  
      try{
     
         let cadastro = req.body;
   
         cadastro = await cadastroModels.insert(cadastro);
         //res.send(cadastro)
         res.redirect('/dashboard')
      
         }catch(err){
            
            res.status(400).send({error: err.message})
      
         }
   }
};


module.exports = createCadastro;