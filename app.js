const Express = require('express');
const Volleyball = require('volleyball');
const BodyParser = require('body-parser');
const Path = require('path');
const Cors = require('cors');
//db
const db = require('./db');
//rotas
const clienteRoutes = require('./routes/cliente');
const loginRoutes = require('./routes/login');
const categoriaRoutes = require('./routes/categoria');
const servicoRoutes = require('./routes/servico');
const promocaoRoutes = require('./routes/promocao');
const funcionarioRoutes = require('./routes/funcionario');

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
app.use(apiApp + 'cliente', clienteRoutes);
app.use(apiApp + 'login', loginRoutes);
app.use(apiApp + 'categoria', categoriaRoutes);
app.use(apiApp + 'servico', servicoRoutes);
app.use(apiApp + 'promocao', promocaoRoutes);
app.use(apiApp + 'funcionario', funcionarioRoutes);
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
