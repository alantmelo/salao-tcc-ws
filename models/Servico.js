const Sequelize = require('sequelize');
const db = require('../db');
const Servico = db.define('servico', {
    'nome': {
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [1, 150],
                msg: "Favor o campo nome deve ter no minimo 6 caracters e no máximo 150"
            }
        }
    },
    'valor': {
        type: Sequelize.FLOAT,        
    },
    'tempo': {
        type: Sequelize.INTEGER, //valor em minutos
    },
    'descricao': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo CNPJ"
            }
        }
    },
   
});
module.exports = Servico;
