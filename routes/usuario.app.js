const router = require('express').Router();
const Usuario = require('../models/Usuario');
const Distance = require('google-distance-matrix');
Distance.key('AIzaSyDzxay5cBKH37Q_8tPkUjtxlZYqIp1SteM');
Distance.mode('driving');
const Async = require('async');

const Endereco = require('../models/Endereco');

module.exports = router;
router.get('/id/:id/:origem', (req, res, next) => {
    Usuario.find({
        where: {
            ativo: true,
            id : req.params.id
        },
        include: [{
            all: true
        }],
        attributes: {
            exclude: ['senha']
        }
    }).then((usuario) => {
        Distance.matrix([req.params.origem], [usuario.endereco.latitude + ',' + usuario.endereco.longitude], (err, distances) => {
            usuario.distancia = distances.rows[0].elements[0].distance.text;
            res.json(usuario);
        })
     }).catch((error) => res.send(error));
})
//todas as igrejas
router.get('/:origem/:cidade', (req, res, next) => {
    Usuario.findAll({
        where: {
            ativo: true
        },
        include: [{
            model : Endereco, where : {cidade : "Maceió"}
        }],
        attributes: {
            exclude: ['senha'],
        }
    }).then((usuario) => {
        Async.forEach(usuario,  (usuarioItem, callback) => {
            Distance.matrix([req.params.origem], [usuarioItem.endereco.latitude + ',' + usuarioItem.endereco.longitude],  (err, distances) => {
                usuarioItem.distancia = distances.rows[0].elements[0].distance.text;
                console.log(distances.rows[0].elements[0].distance.text);
                callback();
            });
        }, (err) => {
            if (err)
                res.json(err);
            res.send(usuario);
        });
    }).catch((error) => res.send(error));
});