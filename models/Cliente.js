const Sequelize = require('sequelize');
const db = require('../db');
const Cliente = db.define('cliente', {
    'nome': {
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [1, 150],
                msg: "Favor o campo nome deve ter no minimo 6 caracters e no máximo 150"
            }
        }
    },
    'email': {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            isEmail: {
                args: [true],
                msg: "Campo email inválido"
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
    'sexo': {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo Sexo"
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
});
module.exports = Cliente;
