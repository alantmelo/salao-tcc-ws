const Sequelize = require('sequelize');
const db = require('../db');
const Login = db.define('login', {
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
    'senha': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo senha"
            }
        }
    },
    'facebookId': {
        type: Sequelize.STRING,
        unique: true,
    },
    'usuarioId': {
        type: Sequelize.STRING,
        unique: true,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo usuario Id"
            }
        }
    },
    "tipo": {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Tipo Vazio"
            }
        }
    },
});
module.exports = Login;
