const Sequelize = require('sequelize');
const db = new Sequelize('postgres://postgres:root@localhost:5432/ahoradamissa_v2');
// const Usuario = require('./models/usuario');0


module.exports = db;


const Usuario = require('./models/Usuario');
const Endereco = require('./models/Endereco');

Usuario.hasOne(Endereco);

