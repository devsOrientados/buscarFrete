const dashboardController = {
    viewForm: (req, res) => {
        return res.render('dashboard')
    },
    salvarForm:(req,res) => {
        var cadastroTeste = {}; 
        cadastroTeste =req.body;
    }
}

module.exports = dashboardController;