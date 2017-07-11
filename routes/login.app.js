const router = require('express').Router();
const UsuarioApp = require('../models/Usuario-App');

module.exports = router;

router.post('/facebook', (req, res, next) => {
    UsuarioApp.find({
        where: {
            facebookId: req.body.usuario.facebookId
        }
    }).then((usuario) => {
        if (usuario === null) {
            UsuarioApp.create(req.body.usuario).then((usuario) => {
                res.json(usuario);
            }).catch((error) => {
                res.send(error)
            });
        } else {
            res.json(usuario);
        }
    }).catch((error) => {
        res.send(error);
    });
});

router.post('/google', (req, res, next) => {
    UsuarioApp.find({
        where: {
            googleId: req.body.usuario.googleId
        }
    }).then((usuario) => {
        if (usuario === null) {
            UsuarioApp.create(req.body.usuario).then((usuario) => {
                res.json(usuario);
            }).catch((error) => {
                res.send(error)
            });
        } else {
            res.json(usuario);
        }
    }).catch((error) => {
        res.send(error);
    });
});