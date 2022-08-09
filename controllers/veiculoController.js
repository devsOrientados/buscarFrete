const veiculoController = {
    viewForm: (req, res) => {
        return res.render('cadastroVeiculo')
    },
    salvarForm:(req,res) => {
        var cadastroTeste2 = {}; 
        cadastroTeste2 =req.body;
        res.redirect('/');
    }
}

module.exports = veiculoController;