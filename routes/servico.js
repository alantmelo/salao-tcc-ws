const router = require('express').Router();
const Servico = require('../models/Servico');
const Categoria = require('../models/Categoria');

module.exports = router;

const ServicoCategoria = Servico.belongsTo(Categoria);

router.get('/:id', (req, res, next) => {
    Servico.findById(req.params.id, {
        include: [{ all: true }]
    }).then((servico) => {
        res.json(servico);
    }).catch((error) => res.send(error));
});

router.get('/', (req, res, next) => {
    Servico.findAll({ include: [{ all: true }]}).then((servicos) => {
        res.json(servicos);
    }).catch((error) => res.send(error));
});

router.post('/', (req, res, next) => {
    Servico.create(req.body.servico).then((servico) => {
        res.json(servico);
    }).catch((error) => res.send(error.errors));
});

router.put('/:id', (req, res, next) => {
    Servico.update(req.body.categoria, {
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