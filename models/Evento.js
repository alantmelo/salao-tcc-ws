const Sequelize = require('sequelize');
const db = require('../db');
const Evento = db.define('evento', {
    "nome_local": {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Nome do Local Vazio"
            },
            notNull: true
        }
    },
    "nome_evento": {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Nome do Evento Vazio"
            },
            notNull: true
        }
    },
    "detalhe": {
        type: Sequelize.TEXT,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Detalhe Vazio"
            },
            notNull: true
        }
    },
    "foto": {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Foto Vazio"
            },
            notNull: true
        }
    },
    "data_inicio": {
        type: Sequelize.DATE,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Data Inicio Vazio"
            },
            notNull: true
        }
    },
    "data_termino": {
        type: Sequelize.DATE,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Data Termino Vazio"
            },
            notNull: true
        }
    },
    "preco": {
        type: Sequelize.DOUBLE,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Preço Vazio"
            },
            notNull: true
        }
    },
    "link": { // Esse campo dever ser validado?
        type: Sequelize.TEXT,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Link Vazio"
            },
            notNull: true
        }
    },
    'distancia': {
        type: Sequelize.VIRTUAL
    }
});

module.exports = Evento;