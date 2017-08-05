const Sequelize = require('sequelize');
const db = require('../db');
const Favorito = db.define('favorito', {
    'usuarioIgreja': {
        type: Sequelize.VIRTUAL
    },
});
module.exports = Favorito;