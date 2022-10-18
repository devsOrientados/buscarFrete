const {check} = require ('express-validator');

let dashboard_validation = [ 
    check('cpf')
      .notEmpty()
      .isLength({min:11})
        .withMessage('por favor, preencher o seu cpf com os 11 números'),
    check('telefone')
        .notEmpty()
        .withMessage('por favor, preencher o seu telefone'),
    check('cnh')
        .notEmpty()
        .withMessage('por favor, preencher o numero da sua CNH'),
    check('categoria')
        .notEmpty()
        .withMessage('por favor, selecione a categoria da sua CNH'),
    check('cidade')
        .notEmpty()
        .withMessage('por favor, preencher o nome da cidade de origem que você costuma realizar fretes')
    ];

module.exports=dashboard_validation;