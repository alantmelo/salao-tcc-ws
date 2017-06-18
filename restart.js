const db = require('./db');
const Usuario = require('./models/usuario');

db.sync({
    force: true
}).then((mensagem) => {
    console.log("e db está sincronizado");
}).catch((err) => {
    throw err;
})