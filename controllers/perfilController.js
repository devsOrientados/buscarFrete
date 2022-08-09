const perfilController = {
    viewForm: (req, res) => {
        return res.render('perfilMotorista')
    },
    salvarForm:(req,res) => {
        var cadastroTeste1 = {}; 
        cadastroTeste1 =req.body;
    }
}

module.exports = perfilController;