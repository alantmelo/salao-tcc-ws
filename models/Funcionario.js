const Sequelize = require('sequelize');
const db = require('../db');
const Funcionario = db.define('funcionario', {
    'nome': {
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [1, 150],
                msg: "Favor o campo nome deve ter no minimo 6 caracters e no máximo 150"
            }
        }
    },
    'cpf': {
        type: Sequelize.STRING,
        unique: {
            args: true,
            msg: 'Cpf já cadastrado.',
        },
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo Cpf"
            }
        }
    },
    'rg': {
        type: Sequelize.STRING,
        unique: {
            args: true,
            msg: 'Rg já cadastrado.',
        },
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo Rg"
            }
        }
    },
    'email': {
        type: Sequelize.STRING,
        unique: {
            args: true,
            msg: 'Email já cadastrado.',
        },
        validate: {
            isEmail: {
                args: [true],
                msg: "Campo email inválido"
            },
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
    "imagem": {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Foto Vazio"
            }
        }
    },
    'sexo': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo Sexo"
            }
        }
    }
});
module.exports = Funcionario;
