const cidadesEstados = require('../models/Estados_Cidades.json');
const controller = {
    index: function(req, res){
        res.render('motoristas', {cidadesEstados})
    }
}


module.exports = controller