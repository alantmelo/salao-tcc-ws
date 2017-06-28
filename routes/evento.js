const router = require('express').Router();
const Evento = require('../models/Evento');
const Endereco = require('../models/Endereco');
const TipoEvento = require('../models/Tipo-Evento');
const FileSystem = require('fs');

const EventoEndereco = Evento.hasOne(Endereco);
const EventoTipoEvento = Evento.belongsTo(TipoEvento);

// const multer = require('multer');
// const upload = multer({ dest: 'uploads/' })

module.exports = router;
// {
//     "evento": {
//         "nome_local": "Robert",
//         "nome_evento": "dasdasdas",
//         "detalhe": "123456789",
//         "foto": " BASE64",
//         "data_inicio": "2007-01-01",
//         "data_termino": "2007-02-02",
//         "preco": 12.50,
//         "link": "1235dsadasdsads64",
//         "tipoEventoId": 1,
//         "endereco": {
//             "cep": "123456789",
//             "logradouro": "dddsadsadas",
//             "complemento": "das",
//             "bairro": "dsa",
//             "cidade": "das",
//             "estado": "das",
//             "numero": "asd",
//             "longitude": "asd",
//             "latitude": "das"
//         }
//     }
// }
router.get('/', (req, res, next) => {
    Evento.findAll({
        include: [{
            all: true
        }]
    }).then((eventos) => {
        res.json(eventos)
    }).catch((error) => res.send(error));
});
router.get('/:id', (req, res, next) => {
    Evento.findById(req.params.id, { include: [{ all: true }] })
        .then((evento) => {
            res.json(evento);
        }).catch((error) => res.send(error));
})
router.post('/', (req, res, next) => {
    let foto = req.body.evento.foto.replace(/^data:image\/\w+;base64,/, '');
    let data = new Date();
    let mes = data.getMonth() + 1;
    data = data.getDate() + "_" + mes + "_" + data.getFullYear();
    let nomeArquivo = req.body.evento.nome_evento + data + '.jpg';
    console.log(nomeArquivo);
    FileSystem.writeFile('uploads/' + nomeArquivo, foto, {
        encoding: 'base64'
    }, function (error) {
        if (error) {
            res.send(error);
        }
        req.body.evento.foto = nomeArquivo;
        Evento.create(req.body.evento, {
            include: [{
                association: EventoEndereco
            }]
        }).then((evento) => {
            res.json(evento);
        }).catch((error) => {
            res.send(error);
        });
    });
});
router.put('/:id', (req, res, next) => {
    let foto = req.body.evento.foto;
    if (foto.length > 50) {
        let foto = req.body.evento.foto.replace(/^data:image\/\w+;base64,/, '');
        let data = new Date();
        let mes = data.getMonth() + 1;
        data = data.getDate() + "_" + mes + "_" + data.getFullYear();
        let nomeArquivo = req.body.evento.nome_evento + data + '.jpg';
        console.log(nomeArquivo);
        FileSystem.writeFile('uploads/' + nomeArquivo, foto, {
            encoding: 'base64'
        }, function (error) {
            if (error) {
                res.send(error);
            }
            req.body.evento.foto = nomeArquivo;
            update(req.body.evento, req.params.id, res);
        });
    } else {
        update(req.body.evento, req.params.id, res);
    }

});

function update(bodyEvento, id, res) {
    Evento.update(bodyEvento, {
        where: {
            id: id
        },
        returning: true
    }).then((evento) => {
        Endereco.update(bodyEvento.endereco, {
            where: {
                eventoId: id
            },
            returning: true
        }).then((endereco) => {
            res.json(bodyEvento);
        }).catch((error) => res.send(error));
    }).catch((error) => res.send(error));
}

router.delete('/:id', (req, res, next) => {
    Evento.destroy({
        where: {
            id: req.params.id
        }
    }).then((res) => {
        res.send("Evento deletado com sucesso");
    }).catch((error) => res.send(error));
});