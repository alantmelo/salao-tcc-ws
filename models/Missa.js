const Sequelize = require('sequelize');
const db = require('../db');
const Missa = db.define('missa', {
    "hora": {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo hora Vazio"
            },
            notNull: true
        }
    },
    "repete" : {
        type: Sequelize.BOOLEAN,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo repete Vazio"
            },
            notNull: true
        }
    },
    'distancia': {
        type: Sequelize.VIRTUAL
    }
});

module.exports = Missa;         