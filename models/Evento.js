const Sequelize = require('sequelize');
const db = require('../db');
const Evento = db.define('evento', {
    "nome_local": {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Nome do Local Vazio"
            }
        }
    },
    "nome_evento": {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Nome do Evento Vazio"
            }
        }
    },
    "detalhe": {
        type: Sequelize.TEXT,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Detalhe Vazio"
            }
        }
    },
    "foto": {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Foto Vazio"
            }
        }
    },
    "data_inicio": {
        type: Sequelize.DATE,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Data Inicio Vazio"
            }
        }
    },
    "data_termino": {
        type: Sequelize.DATE,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Data Termino Vazio"
            }
        }
    },
    "preco": {
        type: Sequelize.DOUBLE,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Preço Vazio"
            }
        }
    },
    "link": { // Esse campo dever ser validado?
        type: Sequelize.TEXT,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Link Vazio"
            }
        }
    }
});

module.exports = Evento;