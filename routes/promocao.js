const router = require('express').Router();
const Promocao = require('../models/Promocao');
const Servico = require('../models/Servico');
const FileSystem = require('fs');

const PromocaoServico = Promocao.belongsTo(Servico);
module.exports = router;

var map = { "â": "a", "Â": "A", "à": "a", "À": "A", "á": "a", "Á": "A", "ã": "a", "Ã": "A", "ê": "e", "Ê": "E", "è": "e", "È": "E", "é": "e", "É": "E", "î": "i", "Î": "I", "ì": "i", "Ì": "I", "í": "i", "Í": "I", "õ": "o", "Õ": "O", "ô": "o", "Ô": "O", "ò": "o", "Ò": "O", "ó": "o", "Ó": "O", "ü": "u", "Ü": "U", "û": "u", "Û": "U", "ú": "u", "Ú": "U", "ù": "u", "Ù": "U", "ç": "c", "Ç": "C" };

function removerAcentos(s) { return s.replace(/[\W\[\] ]/g, function (a) { return map[a] || a }) };

router.get('/:id', (req, res, next) => {
    Promocao.findById(req.params.id, { include: [{ all: true }]}).then((promocao) => {
        res.json(promocao);
    }).catch((error) => res.send(error));
});

router.get('/', (req, res, next) => {
    Promocao.findAll({ include: [{ all: true }]}).then((promocoes) => {
        res.json(promocoes);
    }).catch((error) => res.send(error));
});

router.post('/', (req, res, next) => {
    let imagem = req.body.promocao.imagem.replace(/^data:image\/\w+;base64,/, '');
    let data = new Date();
    let mes = data.getMonth() + 1;
    data = data.getDate() + "_" + mes + "_" + data.getFullYear();
    let nomeArquivo = removerAcentos(req.body.promocao.nome) + data + '.jpg';
    console.log(nomeArquivo);
    FileSystem.writeFile('uploads/promocoes/' + nomeArquivo, imagem, {
        encoding: 'base64'
    }, function (error) {
        if (error) {
            res.send(error);
        } else {
            req.body.promocao.imagem = nomeArquivo;
            Promocao.create(req.body.promocao).then((promocao) => {
                res.json(promocao);
            }).catch((error) => res.send(error.errors));
        }
    });
});

router.put('/:id', (req, res, next) => {
    if (req.body.promocao.imagem == "" || req.body.promocao.imagem == undefined) {
        Promocao.update(req.body.promocao, {
            where: {
                id: req.params.id
            },
            fields: ['nome', 'valorPromocional','descricao','servicoId'],
            returning: true
        }).then((promocao) => {
            res.json("Promocao editada com sucesso");
        }).catch((error) => res.send(error.errors));
    } else {
        console.log(req.body.promocao);
        let imagem = req.body.promocao.imagem.replace(/^data:image\/\w+;base64,/, '');
        let data = new Date();
        let mes = data.getMonth() + 1;
        data = data.getDate() + "_" + mes + "_" + data.getFullYear();
        let nomeArquivo = removerAcentos(req.body.promocao.nome) + data + '.jpg';
        console.log(nomeArquivo);
        FileSystem.writeFile('uploads/promocoes/' + nomeArquivo, imagem, {
            encoding: 'base64'
        }, function (error) {
            if (error) {
                res.send(error);
            } else {
                req.body.promocao.imagem = nomeArquivo;
                Promocao.update(req.body.promocao, {
                    where: {
                        id: req.params.id
                    },
                    returning: true
                }).then((promocao) => {
                    res.json("Promocao editada com sucesso");
                }).catch((error) => res.send(error.errors));
            }
        });
    }
});

router.delete('/:id', (req, res, next) => {
    Promocao.destroy({
        where: {
            id: req.params.id
        }
    }).then((promocao) => {
        res.send("Promocao Deletada com sucesso.");
    }).catch((error) => {
        res.send(error);
    });
});