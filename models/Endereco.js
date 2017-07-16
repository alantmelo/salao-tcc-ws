const Sequelize = require('sequelize');
const db = require('../db');
const Endereco = db.define('endereco', {
    'cep': {
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [1, 9],
                msg: "O campo cep deve ter 9 caracters"
            },
            notNull: true
        }
    },
    'logradouro': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Logradouro Vazio"
            },
            notNull: true
        }
    },
    'complemento': {
        type: Sequelize.STRING,
    },
    'bairro': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Logradouro Vazio"
            },
            notNull: true
        }

    },
    'cidade': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Logradouro Vazio"
            },
            notNull: true
        }

    },
    'estado': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Logradouro Vazio"
            },
            notNull: true
        }

    },
    'numero': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Logradouro Vazio"
            },
            notNull: true
        }

    },
    'longitude': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Logradouro Vazio"
            },
            notNull: true
        }

    },
    'latitude': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Logradouro Vazio"
            },
            notNull: true
        }
    }
});
module.exports = Endereco;