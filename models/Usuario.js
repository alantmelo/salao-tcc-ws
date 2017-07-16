const Sequelize = require('sequelize');
const db = require('../db');
const Usuario = db.define('usuario', {
    'nome': {
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [1, 150],
                msg: "Favor o campo nome deve ter no minimo 6 caracters e no máximo 150"
            },
        notNull: true
        }
    },
    'nome_responsavel': {
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [1, 150],
                msg: "Favor o campo nome do resmposavel deve ter no minimo 6 caracters e no máximo 150"
            }, notNull: true
        }
    },
    'cnpj': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo CNPJ"
            }, notNull: true
        }
    },
    'email': {
        type: Sequelize.STRING,
        validate: {
            isEmail: {
                args: [true],
                msg: "Campo email inválido"
            }, notNull: true
        }
    },
    'ativo': {
        type: Sequelize.BOOLEAN,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo ativo"
            }, notNull: true
        }
    },
    'telefone': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo Telefone"
            }, notNull: true
        }
    },
    'senha': {
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [6, 150],
                msg: "Favor o campo senha deve ter no minimo 6 caracters e no máximo 150"
            }, notNull: true
        }
    },
    "foto": {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Foto Vazio"
            }, notNull: true
        }
    },
    'distancia': {
        type: Sequelize.VIRTUAL
    }
});
module.exports = Usuario;