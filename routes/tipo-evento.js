const router = require('express').Router();
const TipoEvento = require('../models/Tipo-Evento');

module.exports = router;

router.get('/:id', (req, res, next) => {
    TipoEvento.findById(req.params.id).then((tipoEvento) => {
        res.json(tipoEvento);
    }).catch((error) => res.send(error));
});

router.get('/', (req, res, next) => {
    TipoEvento.findAll().then((tipoEventos) => {
        res.json(tipoEventos);
    }).catch((error) => res.send(error));
});

router.post('/', (req, res, next) => {
    TipoEvento.create(req.body.tipo_evento).then((tipoEvento) => {
        res.json(tipoEvento);
    }).catch((error) => res.send(error));
});

router.put('/:id', (req, res, next) => {
    TipoEvento.update(req.body.tipo_evento, { where: { id: req.params.id }, returning: true }).then((tipoEvento) => {
        res.json(tipoEvento);
    }).catch((error) => res.send(error));
});

router.delete('/:id', (req, res, next) => {
    TipoEvento.destroy({ where: { id: req.params.id } }).then(() => {
        res.send("Evento id " + req.params.id +" deletado")
    }).catch((error) => res.send(error));
})
