const Sequelize = require('sequelize');
const db = require('../db');
const UsuarioApp = db.define('usuario_app', {
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
    'email': {
        type: Sequelize.STRING,
        validate: {
            isEmail: {
                args: [true],
                msg: "Campo email inválido"
            },
            notNull: true
        }
    },
    'foto': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo Foto"
            },
            notNull: true
        }
    },
    'facebookId': {
        type: Sequelize.STRING
    },
    'googleId': {
        type: Sequelize.STRING
    },
});
module.exports = UsuarioApp;