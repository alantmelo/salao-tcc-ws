const Sequelize = require('sequelize');
const db = require('../db');
const Reserva = db.define('reserva', {
    'data': {
        type: Sequelize.DATE,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo Data"
            }
        }
    },
    'hora': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo Hora"
            }
        }
    },
    'descricao': {
        type: Sequelize.STRING,
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
module.exports = Reserva;
