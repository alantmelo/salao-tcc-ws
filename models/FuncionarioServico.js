const Sequelize = require('sequelize');
const db = require('../db');
const FuncionarioServico = db.define('funcionarioServico', {
    servicoId: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo servicoId"
            }
        }
    },
    funcionarioId: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo servicoId"
            }
        }
    }
});
module.exports = FuncionarioServico;