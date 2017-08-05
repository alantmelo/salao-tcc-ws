const Sequelize = require('sequelize');
const db = require('../db');
const Endereco = db.define('endereco', {
    'cep': {
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [1, 9],
                msg: "O campo cep deve ter 9 caracters"
            }
        }
    },
    'logradouro': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Logradouro Vazio"
            }
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
            }
                   }

    },
    'cidade': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Logradouro Vazio"
            }
            
        }

    },
    'estado': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Logradouro Vazio"
            }
                    }

    },
    'numero': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Logradouro Vazio"
            }
            
        }

    },
    'longitude': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Logradouro Vazio"
            }
           
        }

    },
    'latitude': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Logradouro Vazio"
            }
        }
    }
});
module.exports = Endereco;
