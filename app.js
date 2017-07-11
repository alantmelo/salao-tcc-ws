const Express = require('express');
const Volleyball = require('volleyball');
const BodyParser = require('body-parser');
const Path = require('path');
//db
const db = require('./db');
//rotas
const usuarioRoutes = require('./routes/usuario');
const usuarioAppRoutes = require('./routes/usuario.app');
const tipoEventoRoutes = require('./routes/tipo-evento');
const eventoRoutes = require('./routes/evento');
const eventoAppRoutes = require('./routes/evento.app');
const padreRoutes = require('./routes/padre');
const tipoMissaRoutes = require('./routes/tipo-missa');
const missaRoutes = require('./routes/missa');
const missaAppRoutes = require('./routes/missa.app');
const loginRoutes = require('./routes/login');
const santoDiaRoutes = require('./routes/santo-dia');
const santoDiaAppRoutes = require('./routes/santo-dia.app');
const loginAppRoutes = require('./routes/login.app');
const favoritoRoutes = require('./routes/favorito.app');
const apiVersion = "/v1";
const apiWeb = apiVersion + "/web/";
const apiApp = apiVersion + "/app/"

const app = Express();
app.use(Volleyball);

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use(Express.static(Path.join(__dirname, 'public')));

//Rotas da api
//Igreja || Usuario
app.use(apiWeb + 'igreja', usuarioRoutes);
app.use(apiApp + 'igreja', usuarioAppRoutes);
//Tipo Evento
app.use(apiWeb + 'tipo-evento', tipoEventoRoutes);
// Evento
app.use(apiWeb + 'evento', eventoRoutes);
app.use(apiApp + 'evento', eventoAppRoutes);
//Padre
app.use(apiWeb + 'padre', padreRoutes);
//Tipo Missa
app.use(apiWeb + 'tipo-missa', tipoMissaRoutes);
//Missa
app.use(apiWeb + 'missa', missaRoutes);
app.use(apiApp + 'missa', missaAppRoutes);
//Login 
app.use(apiWeb + 'login', loginRoutes);
//Santo Dia
app.use(apiWeb + 'santodia', santoDiaRoutes);
app.use(apiApp + 'santodia', santoDiaAppRoutes);
//Login App
app.use(apiApp + 'login', loginAppRoutes);
//Favorito
app.use(apiApp + 'favorito', favoritoRoutes);

//Rota default
app.use('*', (req, res, next) => {
    res.send("Pagina Default");
});

const server = app.listen(3000, () => {
    console.log('Servidor rodando e escutando a porta', server.address().port, '...');
    db.sync().then((mensagem) => {
        console.log("e db está sincronizado");
    }).catch((err) => {
        throw err;
    })
})