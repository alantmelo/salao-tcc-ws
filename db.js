const Sequelize = require('sequelize');
<<<<<<< HEAD
const db = new Sequelize('postgres://postgres:arrombado2017@127.0.0.1:5432/ahoradamissa_v2', {
=======
const db = new Sequelize('postgres://postgres:arrombado2017@localhost:5432/ahoradamissa_v2', {
>>>>>>> 870604f9646888401fcc4ad27da625e6a999ae38
    logging:false
});
// const Usuario = require('./models/usuario');0


module.exports = db;


const Usuario = require('./models/Usuario');
const Evento = require('./models/Evento');
const Endereco = require('./models/Endereco');
const TipoEvento = require('./models/Tipo-Evento');


Usuario.hasOne(Endereco);
Evento.hasOne(Endereco);
Evento.belongsTo(TipoEvento);


