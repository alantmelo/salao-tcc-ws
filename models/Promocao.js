const Sequelize = require('sequelize');
const db = require('../db');
const Promocao = db.define('promocao', {
    'nome': {
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [1, 150],
                msg: "Favor o campo nome deve ter no minimo 6 caracters e no máximo 150"
            }
        }
    },
    'valorPromocional': {
        type: Sequelize.FLOAT,
    },
    'tempo': {
        type: Sequelize.INTEGER, //em minutos
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
    'imagem': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo Imagem"
            }
        }
    },

});
module.exports = Promocao;
