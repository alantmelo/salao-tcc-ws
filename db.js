const Sequelize = require('sequelize');

const db = new Sequelize('postgres://postgres:for@Temer2k17@localhost:5432/salao', {
    logging:false
});
// const Usuario = require('./models/usuario');0


module.exports = db;


// const Usuario = require('./models/Usuario');
// const Evento = require('./models/Evento');
// const Endereco = require('./models/Endereco');
// const TipoEvento = require('./models/Tipo-Evento');


// Usuario.hasOne(Endereco);
// Evento.hasOne(Endereco);
// Evento.belongsTo(TipoEvento);


