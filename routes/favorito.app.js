const router = require('express').Router();
const UsuarioApp = require('../models/Usuario-App');
const Favorito = require('../models/Favorito');
const Usuario = require('../models/Usuario');
const Async = require('async');
module.exports = router;
const FavoritosIgreja = Favorito.belongsTo(Usuario);
const FavoritosUsuarioApp = Favorito.belongsTo(UsuarioApp);
const CreatorAssociation = Usuario.hasOne(Endereco);

router.post('/', (req, res, next) => {
    Favorito.create(req.body.favorito)
        .then((favorito) => {
            res.json(favorito);
        }).catch((error) => res.send(error));
});

router.get('/:id', (req, res, next) => {
    Favorito.findAll({
        where: {
            usuarioAppId: req.params.id
        }
    }).then((favoritos) => {

        Async.forEach(favoritos, (favorito, callback) => {
            Usuario.find({
                where: {
                    id: favorito.usuarioId
                },
                include: [{
                    all: true
                }],
            }).then((usuario) => {
                console.log(usuario);
                favorito.usuarioIgreja = usuario;
                callback();
            }).catch((error) => {
                favorito.usuarioIgreja = null;
                callback();
            })
        }, (err) => {
            if (err) {
                res.json(err);
            }
            res.send(favoritos);
        })
    }).catch((error) => {
        res.send(error);
    })
});

router.delete('/:igreja/:usuario', (req, res, next) => {
    Favorito.destroy({
        where: {
            usuarioId: req.params.igreja,
            usuarioAppId: req.params.usuario
        }
    }).then((deletado) => {
        res.send("Favorito da igreja" + req.params.igreja + "  e usuario " + req.params.usuario + " deletado");
    }).catch((error) => {
        res.send(error);
    })
});