const Sequelize = require('sequelize');
const db = require('./db');
const Padre = db.define('padre', {
    'nome': {
        type: Sequelize.STRING,
        validade: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo nome"
            }
        }
    }
})
module.exports = Padre;