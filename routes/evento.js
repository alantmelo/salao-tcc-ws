const router = require('express').Router();
const Evento = require('../models/Evento');
const Endereco = require('../models/Endereco');
const TipoEvento = require('../models/Tipo-Evento');

const EventoEndereco = Evento.hasOne(Endereco);
const EventoTipoEvento = Evento.belongsTo(TipoEvento);

module.exports = router;

router.post('/', (req, res, next) => {
    console.log(EventoEndereco);
    Evento.create(req.body.evento, {
        include: [{
            association: EventoEndereco
        }]
    }).then((evento) => {
        res.json(evento);
    }).catch((error) => result.send(error));
});