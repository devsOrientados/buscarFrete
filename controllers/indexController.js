const indexController = {
    home:(req, res) => {
        return res.render('index', {usuario:req.session.usuario});

    }
};

module.exports = indexController;