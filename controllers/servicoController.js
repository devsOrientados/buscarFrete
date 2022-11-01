const servicoController = {
    viewBuscaServico: (req, res) =>{
        return res.render('buscaServico');
    },
    viewServico:(req, res) => {
        return res.render('cadastroServico');

    },
    viewVeiculo:(req, res) => {
        return res.render('cadastroVeiculo');

    },
};

module.exports = servicoController;