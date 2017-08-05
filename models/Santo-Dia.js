const Sequelize = require('sequelize');
const db = require('../db');

const SantoDia = db.define('santo_dia', {
    'titulo': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg : "Campo titulo vazio"
            }
        }
    },
    'foto': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Foto Vazio"
            }
        }
    },
    'texto': {
        type: Sequelize.TEXT,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo texto vazio"
            }
        }
    },
    'dia': {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo dia vazio"
            }
        }
    },
    'mes': {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo mes vazio"
            }
        }
    },
    'foto': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo foto vazio"
            }
        }
    }
});
module.exports = SantoDia;





