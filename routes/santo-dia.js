const router = require('express').Router();
const SantoDia = require('../models/Santo-Dia');
const FileSystem = require('fs');

module.exports = router;
router.get('/', (req, res, next) => {
    SantoDia.findAll().then((santos) => {
        res.json(santos);
    }).catch((error) => {
        res.send(error);
    })
});
router.get('/:id', (req, res, next) => {
    SantoDia.findById(req.params.id).then((santo) => {
        res.json(santo);
    }).catch((error) => {
        res.send(error);
    })
});

router.post('/', (req, res, next) => {

    let foto = req.body.santodia.foto.replace(/^data:image\/\w+;base64,/, '');
    let data = new Date();
    let mes = data.getMonth() + 1;
    data = data.getDate() + "_" + mes + "_" + data.getFullYear();
    let nomeArquivo = "santo" + data + '.jpg';
    console.log(nomeArquivo);
    FileSystem.writeFile('uploads/santodia/' + nomeArquivo, foto, {
        encoding: 'base64'
    }, function (error) {
        if (error) {
            res.send(error);
        }
        req.body.santodia.foto = "uploads/santodia/" + nomeArquivo;
        console.log(req.body.santodia);
        SantoDia.create(req.body.santodia)
            .then((santo) => {
                res.json(santo);
            }).catch((error) => {
                res.send(error);
            });

    });


});

router.put('/:id', (req, res, next) => {

    let foto = req.body.santodia.foto;
    if (foto.length > 50) {
        let foto = req.body.santodia.foto.replace(/^data:image\/\w+;base64,/, '');
        let data = new Date();
        let mes = data.getMonth() + 1;
        data = data.getDate() + "_" + mes + "_" + data.getFullYear();
        let nomeArquivo = "santo" + data + '.jpg';
        console.log(nomeArquivo);
        FileSystem.writeFile('uploads/santodia/' + nomeArquivo, foto, {
            encoding: 'base64'
        }, function (error) {
            if (error) {
                res.send(error);
            }
            req.body.santodia.foto = "uploads;santodia/" + nomeArquivo;
            update(req.body.santodia, req.params.id, res);
        });
    } else {
        update(req.body.santodia, req.params.id, res);
    }
});

function update(bodySantoDia, id, res) {
    SantoDia.update(bodySantoDia, {
        where: {
            id: id
        },
        returning: true
    }).then((santo) => {
        res.json(bodySantoDia);
    }).catch((error) => {
        res.send(error);
    })
};

router.delete('/:id', (req, res, next) => {
    SantoDia.destroy({
        where: {
            id: req.params.id
        }
    }).then((santo) => {
        res.send("Santo do dia deletado com sucesso");
    }).catch((error) => res.send(error));
});