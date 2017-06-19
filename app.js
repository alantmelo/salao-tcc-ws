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

const apiVersion = "/v1";
const apiWeb = apiVersion + "/web/";
const apiApp = apiVersion + "/app/"

const app = Express();
app.use(Volleyball);

app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.use(Express.static(Path.join(__dirname, 'public')));

//Rotas da api
app.use(apiWeb + 'igreja', usuarioRoutes);
app.use(apiApp + 'igreja', usuarioAppRoutes);
app.use(apiWeb + 'tipo-evento', tipoEventoRoutes);
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