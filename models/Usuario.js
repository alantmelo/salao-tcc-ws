const Sequelize = require('sequelize');
const db = require('../db');
const Usuario = db.define('usuario', {
    'nome': {
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [1, 150],
                msg: "Favor o campo nome deve ter no minimo 6 caracters e no máximo 150"
            }
        }
    },
    'nome_responsavel': {
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [1, 150],
                msg: "Favor o campo nome do resmposavel deve ter no minimo 6 caracters e no máximo 150"
            }
        }
    },
    'cnpj': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo CNPJ"
            }
        }
    },
    'email': {
        type: Sequelize.STRING,
        validate: {
            isEmail: {
                args: [true],
                msg: "Campo email inválido"
            }
        }
    },
    'ativo': {
        type: Sequelize.BOOLEAN,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo ativo"
            }
        }
    },
    'telefone': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo Telefone"
            }
        }
    },
    'senha': {
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [6, 150],
                msg: "Favor o campo senha deve ter no minimo 6 caracters e no máximo 150"
            }
        }
    },
    "foto": {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Foto Vazio"
            }
        }
    },
    'distancia': {
        type: Sequelize.VIRTUAL
    }
});
module.exports = Usuario;
