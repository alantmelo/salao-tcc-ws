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
router.get('/:id/:idUsuario', (req, res, next) => {
    Missa.findById(req.params.id, {
        where: {
            usuarioId : req.params.idUsuario
        },
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
});

router.get('/:idUsuario', (req, res, next) => {
    Missa.findAll({
        where: {
            usuarioId: req.params.idUsuario  
        },
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