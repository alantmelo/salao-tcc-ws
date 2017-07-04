const router = require('express').Router();
const Evento = require('../models/Evento');
const Distance = require('google-distance-matrix');
Distance.key('AIzaSyBVG_zvo9jSpTOq7b-wfdjHnzTbVZNq6PU');
Distance.mode('driving');
const Async = require('async');
const TipoEvento = require('../models/Tipo-Evento');
const Endereco = require('../models/Endereco');
const Usuario = require('../models/Usuario');
const EventoEndereco = Evento.hasOne(Endereco);
const EventoTipoEvento = Evento.belongsTo(TipoEvento);
const EventoUsuario = Evento.belongsTo(Usuario);

module.exports = router;
router.get('/id/:id/:origem', (req, res, next) => {
    const dataAtual = new Date();
    const diasRestantes = 60;
    dataAtual.setDate(dataAtual.getDate() + diasRestantes);
    console.log(dataAtual);
    Evento.findById(req.params.id,{
        where: {
            data_termino: {
                $gte: new Date,
                $lt: dataAtual
            }
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
    }).then((evento) => {
            Distance.matrix([req.params.origem], [evento.endereco.latitude + ',' + evento.endereco.longitude], (err, distances) => {
                evento.distancia = distances.rows[0].elements[0].distance.text;
                res.json(evento);
            });
    }).catch((error) => res.send(error));
})

router.get('/:origem/:cidade', (req, res, next) => {
    const dataAtual = new Date();
    const diasRestantes  = 60;
    dataAtual.setDate(dataAtual.getDate() + diasRestantes); 
    console.log(dataAtual);
    Evento.findAll({
        where: {
            '$endereco.cidade$': req.params.cidade,
            data_termino: {
                $gte: new Date,
                $lt: dataAtual
            }
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
        Async.forEach(eventos, (evento, callback) => {
            Distance.matrix([req.params.origem], [evento.endereco.latitude + ',' + evento.endereco.longitude], (err, distances) => {
                evento.distancia = distances.rows[0].elements[0].distance.text;
                callback();
            });
        }, (err) => {
            if (err) {
                res.json(err);
            }
            res.json(eventos);
        });    
    }).catch((error) => res.send(error));
})