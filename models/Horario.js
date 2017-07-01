const Sequelize = require('sequelize');
const db = require('../db');
const Horario = db.define('horario', {
    "segunda": {
        type: Sequelize.BOOLEAN,
        defaultValue: true,        
    },
    "terca": {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
    "quarta": {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
    "quinta": {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
    "sexta": {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
    "sabado": {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
    "domingo": {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
});
module.exports = Horario;