const router = require('express').Router();
const Evento = require('../models/Evento');
const Distance = require('google-distance-matrix');
Distance.key('AIzaSyDzxay5cBKH37Q_8tPkUjtxlZYqIp1SteM');
Distance.mode('driving');
const Async = require('async');

const Endereco = require('../models/Endereco');

module.exports = router;
router.get('/id/:id/:origem', (req, res, next) => {
    Evento.find({
        where: {
            id: req.params.id
        },
        include: [{
            all: true
        }]
    }).then((evento) => {
        Distance.matrix([req.params.origem], [evento.endereco.latitude + ',' + evento.endereco.longitude], (err, distances) => {
            console.log(distances.rows[0]);
            evento.distancia = distances.rows[0].elements[0].distance.text;
            res.json(evento);
        })
        // res.json(evento);
    }).catch((error) => res.send(error));
})