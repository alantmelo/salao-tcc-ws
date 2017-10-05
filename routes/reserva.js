const router = require('express').Router();
const Servico = require('../models/Servico');
const Funcionario = require('../models/Funcionario');
const Cliente = require('../models/Cliente');
const Reserva = require('../models/Reserva');


const ReservaServico = Reserva.belongsTo(Servico);
const ReservaFuncionario = Reserva.belongsTo(Funcionario);
const ReservaCliente = Reserva.belongsTo(Cliente)

module.exports = router;

router.get('/:id', (req, res, next) => {
    Reserva.findById(req.params.id, {
        include: [{ all: true }]
    }).then((reserva) => {
        res.json(reserva);
    }).catch((error) => res.send(error));
});

router.get('/categoria/:id', (req, res, next) => {
    Servico.findAll({
        where: {
            categoriaId: req.params.id
        },
        include: [{ all: true }]
    }).then((servicos) => {
        res.json(servicos);
    }).catch((error) => res.send(error));
});

router.get('/', (req, res, next) => {
    Reserva.findAll({ include: [{ all: true }] }).then((reservas) => {
        res.json(reservas);
    }).catch((error) => res.send(error));

});

router.post('/', (req, res, next) => {
    Reserva.create(req.body.reserva).then((reserva) => {
        res.json(reserva);
    }).catch((error) => res.send(error.errors));
});

router.put('/:id', (req, res, next) => {
    Servico.update(req.body.servico, {
        where: {
            id: req.params.id
        },
        returning: true
    }).then((servico) => {
        res.json("Serviço editada com sucesso");
    }).catch((error) => res.send(error.errors));

});

router.delete('/:id', (req, res, next) => {
    Servico.destroy({
        where: {
            id: req.params.id
        }
    }).then((servico) => {
        res.send("Serviço Deletada com sucesso.");
    }).catch((error) => {
        res.send(error);
    });
});