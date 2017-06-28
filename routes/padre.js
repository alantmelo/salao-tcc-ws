const router = require('express').Router();
const Padre = require('../models/Padre');
const Usuario = require('../models/Usuario');

const PadreIgreja = Padre.belongsTo(Usuario);

module.exports = router;
router.get('/', (req, res, next) => {
    Padre.findAll().then((padres) => {
        res.json(padres);
    }).catch((error) => {
        res.send(error);
    })
});
router.get('/:id', (req, res, next) => {
    Padre.findById(req.params.id).then((padre) => {
        res.json(padre);
    }).catch((error) => {
        res.send(error);
   })
});
router.get('/byigreja/:id', (req, res, next) => {
    Padre.findAll({
        where: {
            usuarioId: req.params.id
        }
    }).then((padres) => {
        res.json(padres);
    }).catch((error) => res.send(error));
});
router.post('/', (req, res, next) => {
    Padre.create(req.body.padre)
        .then((padre) => {
            res.json(padre);
        }).catch((error) => {
            res.send(error);
        });
});

router.put('/:id', (req, res, next) => {
    Padre.update(req.body.padre, {
        where: {
            id : req.params.id   
        },
        returning: true
    }).then((padre) => {
        res.json(req.body.padre);
        }).catch((error) => {
            res.send(error);
    })
});

router.delete('/:id', (req, res, next) => {
    Padre.destroy({
        where: {
            id: req.params.id
        }
    }).then((res) => {
        res.send("Padre deletado com sucesso");
    }).catch((error) => res.send(error));
})