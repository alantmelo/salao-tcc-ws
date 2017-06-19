const Sequelize = require('sequelize');
const db = require('../db');

const TipoEvento = db.define('tipo_evento', {
    'nome': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo nome Vazio"
            }
        }
    }
})

module.exports = TipoEvento;