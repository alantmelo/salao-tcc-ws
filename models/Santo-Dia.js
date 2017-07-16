const Sequelize = require('sequelize');
const db = require('../db');

const SantoDia = db.define('santo_dia', {
    'titulo': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg : "Campo titulo vazio"
            },
            notNull: true
        }
    },
    'foto': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Foto Vazio"
            },
            notNull: true
        }
    },
    'texto': {
        type: Sequelize.TEXT,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo texto vazio"
            },
            notNull: true
        }
    },
    'dia': {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo dia vazio"
            },
            notNull: true
        }
    },
    'mes': {
        type: Sequelize.INTEGER,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo mes vazio"
            },
            notNull: true
        }
    },
    'foto': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo foto vazio"
            },
            notNull: true
        }
    }
});
module.exports = SantoDia;
