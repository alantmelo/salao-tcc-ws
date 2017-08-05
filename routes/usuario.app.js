const router = require('express').Router();
const Usuario = require('../models/Usuario');
const Distance = require('google-distance-matrix');
Distance.key('AIzaSyDzxay5cBKH37Q_8tPkUjtxlZYqIp1SteM');
Distance.mode('driving');
const Async = require('async');

const Endereco = require('../models/Endereco');
const Favoritos = require('../models/Favorito');

module.exports = router;
router.get('/id/:id/:origem/:idapp', (req, res, next) => {
    Usuario.find({
        where: {
            ativo: true,
            id: req.params.id
        },
        include: [{
            all: true
        }],
        attributes: {
            exclude: ['senha']
        }
    }).then((usuario) => {
        Favoritos.find({
            where: {
                usuarioId: req.params.id,
                usuarioAppId: req.params.idapp
            }
        }).then((favorito) => {
            if (favorito == null) {
                usuario.favorito = false;
            } else {
                usuario.favorito = true;
            }
            Distance.matrix([req.params.origem], [usuario.endereco.latitude + ',' + usuario.endereco.longitude], (err, distances) => {
                if (distances.rows[0].elements[0].distance.text === undefined || distances.rows[0].elements[0].distance.text === "" || distances.rows[0].elements[0].distance.text === null) {
                    usuario.distancia = "Distancia nao encontrada";
                } else {
                    usuario.distancia = distances.rows[0].elements[0].distance.text;
                }
                res.json(usuario);
            });            
        }).catch((error) => res.send(error));

    }).catch((error) => res.send(error));
})
//todas as igrejas
router.get('/:origem/:cidade', (req, res, next) => {
    Usuario.findAll({
        where: {
            ativo: true
        },
        include: [{
            model: Endereco, where: { cidade: "Maceió" }
        }],
        attributes: {
            exclude: ['senha'],
        }
    }).then((usuario) => {
        Async.forEach(usuario, (usuarioItem, callback) => {
            Distance.matrix([req.params.origem], [usuarioItem.endereco.latitude + ',' + usuarioItem.endereco.longitude], (err, distances) => {
                console.log(distances.rows[0]);
                console.log("distances.rows[0])");
                console.log(distances.rows[0].elements[0]);
                if (distances.rows[0].elements[0].status === 'ZERO_RESULTS') {
                    usuarioItem.distancia = "Distancia nao encontrada";
                    callback();
                } else {
                    usuarioItem.distancia = distances.rows[0].elements[0].distance.text;
                    callback();
                }
            });
        }, (err) => {
            if (err) {
                res.json(err);
            }
            res.json(usuario);
        })
    }).catch((error) => res.send(error));
});
