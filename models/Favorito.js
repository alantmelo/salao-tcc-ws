const Sequelize = require('sequelize');
const db = require('../db');
const Favorito = db.define('favorito', {});
module.exports = Favorito;