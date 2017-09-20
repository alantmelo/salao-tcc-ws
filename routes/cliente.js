const router = require('express').Router();
const Cliente = require('../models/Cliente');
const Login = require('../models/Login');

module.exports = router;
// router.get('/:id/:idUsuario', (req, res, next) => {
//     Missa.findById(req.params.id, {
//         where: {
//             usuarioId : req.params.idUsuario
//         },
//         include: [
//             { model: Horario, as: 'horario' },
//             {
//                 association: MissaUsuario, as: 'igreja', attributes: {
//                     exclude: ['senha']
//                 }
//             },
//             { association: MissaPadre, as: 'padre' },
//             { association: MissaTipoMissa, as: 'tipomissa' }
//         ]
//     }).then((missas) => {
//         res.json(missas);
//     }).catch((error) => res.send(error));
// });

// router.get('/:idUsuario', (req, res, next) => {
//     Missa.findAll({
//         where: {
//             usuarioId: req.params.idUsuario  
//         },
//         include: [
//             { model: Horario, as: 'horario' },
//             {
//                 association: MissaUsuario, as: 'igreja', attributes: {
//                     exclude: ['senha']
//                 } },
//             { association: MissaPadre, as: 'padre' },
//             {association: MissaTipoMissa, as: 'tipomissa'}
//         ]
//     }).then((missas) => {
//         res.json(missas);
//     }).catch((error) => res.send(error));
// });

router.post('/', (req, res, next) => {
    Cliente.create(req.body.cliente).then((cliente) => {
        req.body.cliente.usuarioId = cliente.id;
        req.body.cliente.tipo = "2";
        Login.create(req.body.cliente).then((login) => {
            delete req.body.cliente.senha;
            // req.body.cliente.login = login;
            res.json(req.body.cliente);
        }).catch((error) => res.send(error.errors));
    }).catch((error) => res.send(error.errors));
});

router.put('/:id', (req, res, next) => {
    Cliente.update(req.body.cliente, {
        where: {
            id: req.params.id
        },
        returning: true
    }).then((cliente) => {
        Login.update(req.body.cliente, {
            where: {
                usuarioId: req.params.id
            }
        }
        ).then((login) => {
            res.json(req.body.cliente);
        }).catch((error) => res.send(error.errors));
    }).catch((error) => res.send(error.errors));
});

// router.delete('/:id', (req, res, next) => {
//     Horario.destroy({
//         where: {
//             missaId: req.params.id
//         }
//     }).then((horario) => {
//         Missa.destroy({
//             where: {
//                 id: req.params.id
//             },
//         }).then((missa) => {
//             res.send("Missa deletada com sucesso");
//         }).catch((error) => {
//             res.send(error);
//         })
//     }).catch((error) => {
//         res.send(error);
//     });
// });