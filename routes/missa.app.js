const router = require('express').Router();
const Missa = require('../models/Missa');
const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco');
const Horario = require('../models/Horario');
const TipoMissa = require('../models/Tipo-Missa');
const Padre = require('../models/Padre');

const Distance = require('google-distance-matrix');
Distance.key('AIzaSyBVG_zvo9jSpTOq7b-wfdjHnzTbVZNq6PU');
Distance.mode('driving');
const Async = require('async');

const MissaHorario = Missa.hasOne(Horario, {
    onDelete: 'cascade',
    hooks: true
});
const MissaUsuario = Missa.belongsTo(Usuario);
const MissaPadre = Missa.belongsTo(Padre);
const MissaTipoMissa = Missa.belongsTo(TipoMissa);
module.exports = router;

router.get('/id/:id/:origem', (req, res, next) => {
    Missa.find({
        where: {
            id: req.params.id
        },
        include: [{
                model: Horario,
                as: 'horario'
            },
            {
                association: MissaUsuario,
                as: 'igreja',
                include: [{
                    model: Endereco
                }],
                attributes: {
                    exclude: ['senha']
                }
            },
            {
                association: MissaPadre,
                as: 'padre'
            },
            {
                association: MissaTipoMissa,
                as: 'tipomissa'
            }
        ]
    }).then((missa) => {
        // res.json(missa);
        Distance.matrix([req.params.origem], [missa.usuario.endereco.latitude + ',' + missa.usuario.endereco.longitude], (err, distances) => {
            missa.distancia = distances.rows[0].elements[0].distance.text;
            res.json(missa);
        })
    }).catch((error) => res.send(error));
})

router.get('/:origem/:cidade', (req, res, next) => {
    Missa.findAll({
        where: {
            '$usuario.endereco.cidade$': req.params.cidade
        },
        include: [{
                model: Horario,
                as: 'horario'
            },
            {
                association: MissaUsuario,
                as: 'igreja',
                include: [{
                    model: Endereco
                }],
                attributes: {
                    exclude: ['senha']
                }
            },
            {
                association: MissaPadre,
                as: 'padre'
            },
            {
                association: MissaTipoMissa,
                as: 'tipomissa'
            }
        ]
    }).then((missas) => {
        Async.forEach(missas, (missa, callback) => {
            Distance.matrix([req.params.origem], [missa.usuario.endereco.latitude + ',' + missa.usuario.endereco.longitude], (err, distances) => {
                missa.distancia = distances.rows[0].elements[0].distance.text;
                callback();
            });            
        }, (err) => {
            if (err) {
                res.json(err);                
            }
            res.json(missas);
        });
    }).catch((error) => res.send(error));
});