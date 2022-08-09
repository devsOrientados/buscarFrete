const servicoController = {
    viewForm: (req, res) => {
        return res.render('dadosServico')
    },
    salvarForm:(req,res) => {
        var cadastroTeste2 = {}; 
        cadastroTeste2 =req.body;
    }
}

module.exports = servicoController;