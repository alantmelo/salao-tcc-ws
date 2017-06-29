const router = require('express').Router();
const TipoMissa = require('../models/Tipo-Missa');
module.exports = router;

router.get('/:id', (req, res, next) => {
    TipoMissa.findById(req.params.id).then((tipoMissa) => {
        res.json(tipoMissa);
    }).catch((error) => res.send(error));
});

router.get('/', (req, res, next) => {
    TipoMissa.findAll().then((tipoMissas) => {
        res.json(tipoMissas);
    }).catch((error) => res.send(error));
});

router.post('/', (req, res, next) => {
    TipoMissa.create(req.body.tipo_missa).then((tipoMissa) => {
        res.json(tipoMissa);
    }).catch((error) => res.send(error));
});

router.put('/:id', (req, res, next) => {
    TipoMissa.update(req.body.tipo_missa, { where: { id: req.params.id }, returning: true }).then((tipoMissa) => {
        res.json(tipoMissa);
    }).catch((error) => res.send(error));
});

router.delete('/:id', (req, res, next) => {
    TipoMissa.destroy({ where: { id: req.params.id } }).then(() => {
        res.send("Tipo Missa id " + req.params.id + " deletado")
    }).catch((error) => res.send(error));
})
