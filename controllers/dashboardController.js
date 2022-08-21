const dashboardController = {
    viewForm: (req, res) => {
        return res.render('dashboard')
    },
    salvarForm:(req,res) => {
        var cadastroTeste = {}; 
        cadastroTeste = req.body;
        res.status(201).render;
        res.redirect('/');
    }
}

module.exports = dashboardController;