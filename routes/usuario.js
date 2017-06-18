const router = require('express').Router();

const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco');
const CreatorAssociation = Usuario.hasOne(Endereco);
module.exports = router;


router.get('/', (req, res, next) => {
    Usuario.findAll({
            where: {
                ativo: true
            },
            include: [{
                all: true
            }],
            attributes: {
                exclude: ['senha']
            }
        })
        .then(res.send.bind(res))
        .catch(next);
});

router.get('/:id', (req, res, next) => {
    Usuario.findOne({
        attributes: {
            exclude: ['senha']
        },
        where: {
            ativo: true,
            id: req.params.id
        },
        include: [{
            all : true
        }]
    }).then((usuario) => {
        res.json(usuario);
    }).catch((error) => res.send(error));

});

// requisicao = {
//     "usuario": {
//         "nome": "Roberto",
//         "nome_responsavel": "dasdasdas",
//         "cnpj": "123456789",
//         "email": "rm@gmail.com",
//         "ativo": true,
//         "telefone": "123123213",
//         "senha": "123564",
//         "endereco": {
//             "cep": "123456789",
//             "logradouro": "das",
//             "complemento": "das",
//             "bairro": "dsa",
//             "cidade": "das",
//             "estado": "das",
//             "numero": "asd",
//             "longitude": "asd",
//             "latitude": "das"
//         }
//     }
// }
router.post('/', (req, res, next) => {
    Usuario.create(req.body.usuario, {
        include: [{
            association: CreatorAssociation
        }]
    }).then((usuario) => {
        delete req.body.usuario.senha;
        res.json(req.body.usuario);
    }).catch((error) => result.send(error));
});

router.put('/:id', (req, res, next) => {
    Usuario.update(req.body.usuario, {
        where: {
            id: req.params.id
        },
        returning: true
    }).then((usuario) => {
        Endereco.update(req.body.usuario.endereco, {
            where: {
                usuarioId: req.params.id
            },
            returning: true
        }).then((endereco) => {
            delete req.body.usuario.senha;
            res.json(req.body.usuario);
        }).catch((error) => result.send(error));
    }).catch((error) => result.send(error));
});

router.delete('/:id', (req, res, next) => {
    Usuario.update({ativo : false},{
        where: {
            id: req.params.id
        }
    }).then((res) => {
        res.json(res);
    }).catch((error) => res.send(error));
});