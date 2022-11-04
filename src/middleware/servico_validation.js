const {check} = require ('express-validator');

let servico_validation = [
    check('tipo_viagem')
      .notEmpty()
        .withMessage('por favor,escolha um tipo de viagem'),
    check('auto_descricao')
      .notEmpty()
        .withMessage('por favor, preencher sua autodescricao'),
    ];

module.exports = servico_validation;