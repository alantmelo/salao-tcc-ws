const Sequelize = require('sequelize');
const db = require('../db');
const Padre = db.define('padre', {
    'nome': {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Favor inserir campo nome"
            },
            notNull: true
        }
    }
})
module.exports = Padre;