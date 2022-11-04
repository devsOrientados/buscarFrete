const {check} = require ('express-validator');

let cliente_validation = [
    check('nome')
      .notEmpty()
        .withMessage('por favor, preencher o seu nome'),
    check('sobrenome')
      .notEmpty()
        .withMessage('por favor, preencher o seu sobrenome'),
    check('cpf')
      .notEmpty()
      .isLength({min:11})
        .withMessage('por favor, preencher o seu cpf com os 11 números'),
    check('email')
        .notEmpty()
        .isEmail()
        .withMessage('por favor, digite um e-mail válido'),
    check('senha')
        .notEmpty()
        .withMessage('por favor, digite senha'),
    check('telefone')
        .notEmpty()
        .withMessage('por favor, preencher o seu telefone'),
    check('cnh')
        .notEmpty()
        .withMessage('por favor, preencher o numero da sua CNH'),
    check('categoria_cnh')
        .notEmpty()
        .withMessage('por favor, selecione a categoria da sua CNH'),
    check('cidade')
        .notEmpty()
        .withMessage('por favor, preencher o nome da cidade de origem que você costuma realizar fretes')
    ];

module.exports = cliente_validation;