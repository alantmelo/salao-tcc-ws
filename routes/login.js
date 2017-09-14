const router = require('express').Router();

const Login = require('../models/Login');
const Cliente = require('../models/Cliente');

module.exports = router;
// router.get('/:id', (req, res, next) => {
//     Usuario.findById(req.params.id, {
//         attributes: {
//             exclude: ['senha']
//         }
//     }).then((usuarios) => {
//         res.json(usuarios);
//     }).catch((error) => {
//         res.send(error);
//     });
// });

// router.get('/', (req, res, next) => {
//     Usuario.findAll({
//         attributes: {
//             exclude: ['senha']
//         }
//     }).then((usuarios) => {
//         res.json(usuarios);
//     }).catch((error) => {
//         res.send(error);
//     });
// });

router.post('/', (req, res, next) => {
    Login.find({
        where: {
            email: req.body.login.email,
            senha: req.body.login.senha
        },
        attributes: {
            exclude: ['senha']
        }
    }).then((login) => { //retorna null qnd nao tem
        if (login) {
            Cliente.findById(login.usuarioId).then((cliente) => {
                res.json(cliente);
            }).catch((error) => res.send(error.errors));
        } else {
            res.json(login);
        }
    }).catch((error) => res.send(error.errors));
});