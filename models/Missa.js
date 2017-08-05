const Sequelize = require('sequelize');
const db = require('../db');
const Missa = db.define('missa', {
    "hora": {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo hora Vazio"
            }
        }
    },
    "repete" : {
        type: Sequelize.BOOLEAN,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo repete Vazio"
            }
        }
    },
    'distancia': {
        type: Sequelize.VIRTUAL
    }
});

module.exports = Missa;         
