const Sequelize = require('sequelize');
const db = require('../db');
const TipoMissa = db.define('tipo_missa', {
    'nome': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg : "Campo nome Vazio"
            }
        }
    }
});
module.exports = TipoMissa;
