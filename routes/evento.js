const router = require('express').Router();
const Evento = require('../models/Evento');
const Endereco = require('../models/Endereco');
const Usuario = require('../models/Usuario');
const TipoEvento = require('../models/Tipo-Evento');
const FileSystem = require('fs');

const EventoEndereco = Evento.hasOne(Endereco);
const EventoTipoEvento = Evento.belongsTo(TipoEvento);
const EventoUsuario = Evento.belongsTo(Usuario);

module.exports = router;


var map = { "â": "a", "Â": "A", "à": "a", "À": "A", "á": "a", "Á": "A", "ã": "a", "Ã": "A", "ê": "e", "Ê": "E", "è": "e", "È": "E", "é": "e", "É": "E", "î": "i", "Î": "I", "ì": "i", "Ì": "I", "í": "i", "Í": "I", "õ": "o", "Õ": "O", "ô": "o", "Ô": "O", "ò": "o", "Ò": "O", "ó": "o", "Ó": "O", "ü": "u", "Ü": "U", "û": "u", "Û": "U", "ú": "u", "Ú": "U", "ù": "u", "Ù": "U", "ç": "c", "Ç": "C" };

function removerAcentos(s) { return s.replace(/[\W\[\] ]/g, function (a) { return map[a] || a }) };

router.get('/', (req, res, next) => {
    Evento.findAll({
        include: [{
                model: Endereco
            },
            {
                association: EventoUsuario,
                attributes: {
                    exclude: ['senha']
                }
            },
            {
                association: EventoTipoEvento,
            }
        ]
    }).then((eventos) => {
        res.json(eventos);
    }).catch((error) => res.send(error));
});

router.get('/:id', (req, res, next) => {
    Evento.findById(req.params.id, {
        include: [{
                model: Endereco
            },
            {
                association: EventoUsuario,
                attributes: {
                    exclude: ['senha']
                }
            },
            {
                association: EventoTipoEvento
            }
        ]
    }).then((evento) => {
        res.json(evento);
    }).catch((error) => res.send(error));
});

router.get('/byigreja/:id', (req, res, next) => {
    Evento.findAll({
        where: {
            usuarioId: req.params.id
        },
        include: [{
                model: Endereco
            },
            {
                association: EventoUsuario,
                attributes: {
                    exclude: ['senha']
                }
            },
            {
                association: EventoTipoEvento,
            }
        ]
    }).then((eventos) => {
        res.json(eventos)
    }).catch((error) => res.send(error));
});

router.post('/', (req, res, next) => {
    let foto = req.body.evento.foto.replace(/^data:image\/\w+;base64,/, '');
    let data = new Date();
    let mes = data.getMonth() + 1;
    data = data.getDate() + "_" + mes + "_" + data.getFullYear();
    let nomeArquivo = removerAcentos(req.body.evento.nome_evento) + data + '.jpg';
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
                },
                {
                    association: EventoUsuario
                }
            ]
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
        let nomeArquivo = removerAcentos(req.body.evento.nome_evento) + data + '.jpg';
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
    Endereco.destroy({
        where: {
            eventoId: req.params.id
        }
    }).then((endereco) => {
        Evento.destroy({
            where: {
                id: req.params.id
            }
        }).then((evento) => {
            res.send("Evento deletado com sucesso");
        }).catch((error) => res.send(error));
    }).catch((error) => res.send(error));
});