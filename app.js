const Express = require('express');
const Volleyball = require('volleyball');
const BodyParser = require('body-parser');
const Path = require('path');
const Cors = require('cors');
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
app.use(Cors());

app.use(BodyParser.json({limit : '6mb'}));
app.use(BodyParser.urlencoded({ extended: true, limit : '6mb' }));

app.use('/imagem', Express.static(__dirname + '/uploads' ));

//Rotas da api
//Igreja || Usuario
app.use(apiWeb + 'igreja', usuarioRoutes);
app.use(apiApp + 'igreja', usuarioAppRoutes);
//Tipo Evento
app.use(apiWeb + 'tipoevento', tipoEventoRoutes);
// Evento
app.use(apiWeb + 'evento', eventoRoutes);
app.use(apiApp + 'evento', eventoAppRoutes);
//Padre
app.use(apiWeb + 'padre', padreRoutes);
//Tipo Missa
app.use(apiWeb + 'tipomissa', tipoMissaRoutes);
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
//app.use('*', (req, res, next) => {
  //  res.send("Pagina Default");
//});

const server = app.listen(3000, () => {
    console.log('Servidor rodando e escutando a porta', server.address().port, '...');
    db.sync({ force: false }).then((mensagem) => {
        console.log("e db está sincronizado");
    }).catch((err) => {
        throw err;
    })
})
