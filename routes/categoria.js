const router = require('express').Router();
const Categoria = require('../models/Categoria');
const FileSystem = require('fs');

module.exports = router;

var map = { "â": "a", "Â": "A", "à": "a", "À": "A", "á": "a", "Á": "A", "ã": "a", "Ã": "A", "ê": "e", "Ê": "E", "è": "e", "È": "E", "é": "e", "É": "E", "î": "i", "Î": "I", "ì": "i", "Ì": "I", "í": "i", "Í": "I", "õ": "o", "Õ": "O", "ô": "o", "Ô": "O", "ò": "o", "Ò": "O", "ó": "o", "Ó": "O", "ü": "u", "Ü": "U", "û": "u", "Û": "U", "ú": "u", "Ú": "U", "ù": "u", "Ù": "U", "ç": "c", "Ç": "C" };

function removerAcentos(s) { return s.replace(/[\W\[\] ]/g, function (a) { return map[a] || a }) };

router.get('/:id', (req, res, next) => {
    Categoria.findById(req.params.id).then((categoria) => {
        res.json(categoria);
    }).catch((error) => res.send(error));
});

router.get('/', (req, res, next) => {
    Categoria.findAll().then((categorias) => {
        res.json(categorias);
    }).catch((error) => res.send(error));
});

router.post('/', (req, res, next) => {
    let imagem = req.body.categoria.imagem.replace(/^data:image\/\w+;base64,/, '');
    let data = new Date();
    let mes = data.getMonth() + 1;
    data = data.getDate() + "_" + mes + "_" + data.getFullYear();
    let nomeArquivo = removerAcentos(req.body.categoria.nome) + data + '.jpg';
    console.log(nomeArquivo);
    FileSystem.writeFile('uploads/categorias/' + nomeArquivo, imagem, {
        encoding: 'base64'
    }, function (error) {
        if (error) {
            res.send(error);
        } else {
            req.body.categoria.imagem = nomeArquivo;
            Categoria.create(req.body.categoria).then((categoria) => {
                res.json(categoria);
            }).catch((error) => res.send(error.errors));
        }
    });
});

router.put('/:id', (req, res, next) => {
    if (req.body.categoria.imagem == "" || req.body.categoria.imagem == undefined) {
        Categoria.update(req.body.categoria, {
            where: {
                id: req.params.id
            },
            fields: ['nome'],
            returning: true
        }).then((categoria) => {
            res.json("Categoria editada com sucesso");
        }).catch((error) => res.send(error.errors));
    } else {
        console.log(req.body.categoria);
        let imagem = req.body.categoria.imagem.replace(/^data:image\/\w+;base64,/, '');
        let data = new Date();
        let mes = data.getMonth() + 1;
        data = data.getDate() + "_" + mes + "_" + data.getFullYear();
        let nomeArquivo = removerAcentos(req.body.categoria.nome) + data + '.jpg';
        console.log(nomeArquivo);
        FileSystem.writeFile('uploads/categorias/' + nomeArquivo, imagem, {
            encoding: 'base64'
        }, function (error) {
            if (error) {
                res.send(error);
            } else {
                req.body.categoria.imagem = nomeArquivo;
                Categoria.update(req.body.categoria, {
                    where: {
                        id: req.params.id
                    },
                    returning: true
                }).then((categoria) => {
                    res.json("Categoria editada com sucesso");
                }).catch((error) => res.send(error.errors));
            }
        });
    }
});

router.delete('/:id', (req, res, next) => {
    Categoria.destroy({
        where: {
            id: req.params.id
        }
    }).then((categoria) => {
        res.send("Categoria Deletada com sucesso.");
    }).catch((error) => {
        res.send(error);
    });
});