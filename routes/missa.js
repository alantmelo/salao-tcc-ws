const router = require('express').Router();
const Missa = require('../models/Missa');
const Padre = require('../models/Padre');
const Usuario = require('../models/Usuario');
const Horario = require('../models/Horario');
const TipoMissa = require('../models/Tipo-Missa');

const MissaHorario = Missa.hasOne(Horario, {
    onDelete: 'cascade',
    hooks: true
});
const MissaUsuario = Missa.belongsTo(Usuario);
const MissaPadre = Missa.belongsTo(Padre);
const MissaTipoMissa = Missa.belongsTo(TipoMissa);

module.exports = router;
router.get('/:id', (req, res, next) => {
    Missa.findById(req.params.id, {
        include: [
            { model: Horario, as: 'horario' },
            {
                association: MissaUsuario, as: 'igreja', attributes: {
                    exclude: ['senha']
                }
            },
            { association: MissaPadre, as: 'padre' },
            { association: MissaTipoMissa, as: 'tipomissa' }
        ]
    }).then((missas) => {
        res.json(missas);
    }).catch((error) => res.send(error));
})
router.get('/', (req, res, next) => {
    Missa.findAll({
        include: [
            { model: Horario, as: 'horario' },
            {
                association: MissaUsuario, as: 'igreja', attributes: {
                    exclude: ['senha']
                } },
            { association: MissaPadre, as: 'padre' },
            {association: MissaTipoMissa, as: 'tipomissa'}
        ]
    }).then((missas) => {
        res.json(missas);
    }).catch((error) => res.send(error));
});
// {
//     "missa" : {
//         "tipo": 1,
//             "hora" : "19:00",
//                 "usuarioId": 1,
//                     "repete": true,
//                         "padreId" : 4,
//                             "horario" : {
//             "segunda" : true,
//                 "terca"  : true,
//                     "quarta" : true,
//                         "quinta" : true,
//                             "sexta" : false,
//                                 "sabado" : true,
//                                     "domingo" : true
//         }
//     }
// }
router.post('/', (req, res, next) => {
    Missa.create(req.body.missa, {
        include: [{
            association: MissaHorario
        }]
    }).then((missa) => {
        res.json(missa);
    }).catch((error) => res.send(error));
});

router.put('/:id', (req, res, next) => {
    Missa.update(req.body.missa, {
        where: {
            id: req.params.id
        },
        returning: true
    }).then((missa) => {
        Horario.update(req.body.missa.horario, {
            where: {
                missaId: req.params.id
            },
            returning: true
        }).then((horario) => {
            res.json(req.body.missa);
        }).catch((error) => result.send(error));
    }).catch((error) => result.send(error));
});

router.delete('/:id', (req, res, next) => {
    Horario.destroy({
        where: {
            missaId: req.params.id
        }
    }).then((horario) => {
        Missa.destroy({
            where: {
                id: req.params.id
            },
        }).then((missa) => {
            res.send("Missa deletada com sucesso");
        }).catch((error) => {
            res.send(error);
        })
    }).catch((error) => {
        res.send(error);
    });
});