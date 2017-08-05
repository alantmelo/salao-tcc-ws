const router = require('express').Router();

const Usuario = require('../models/Usuario');

module.exports = router;
router.get('/:id', (req, res, next) => {
    Usuario.findById(req.params.id,{
        attributes: {
            exclude: ['senha']
        }
    }).then((usuarios) => {
        res.json(usuarios);
    }).catch((error) => {
        res.send(error);
    });
});

router.get('/', (req, res, next) => {
    Usuario.findAll({
        attributes: {
            exclude: ['senha']
        }
    }).then((usuarios) => {
        res.json(usuarios);
    }).catch((error) => {
        res.send(error);
    });
});

router.post('/', (req, res, next) => {
    Usuario.find({
        where: {
            email: req.body.usuario.email,
            senha: req.body.usuario.senha,
            ativo : true
        },
        attributes: {
            exclude: ['senha']
        }
    }).then((usuario) => {
        res.json(usuario);
    }).catch((error) => {
        res.send(error);
    });
});