const router = require('express').Router();

const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco');
const FileSystem = require('fs');
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
            all: true
        }]
    }).then((usuario) => {
        res.json(usuario);
    }).catch((error) => res.send(error));

});

router.post('/', (req, res, next) => {
    let foto = req.body.evento.foto.replace(/^data:image\/\w+;base64,/, '');
    let data = new Date();
    let mes = data.getMonth() + 1;
    data = data.getDate() + "_" + mes + "_" + data.getFullYear();
    let nomeArquivo = req.body.usuario.nome + data + '.jpg';
    FileSystem.writeFile('uploads/usuarios/' + nomeArquivo, foto, {
        encoding: 'base64'
    }, function (error) {
        if (error) {
            res.send(error);
        }
        req.body.usuario.foto = nomeArquivo;
        Usuario.create(req.body.usuario, {
            include: [{
                association: CreatorAssociation
            }]
        }).then((usuario) => {
            delete req.body.usuario.senha;
            res.json(req.body.usuario);
        }).catch((error) => result.send(error));
    });
});

router.put('/:id', (req, res, next) => {
    let foto = req.body.usuario.foto;
    if (foto.length > 50) {
        let foto = req.body.evento.foto.replace(/^data:image\/\w+;base64,/, '');
        let data = new Date();
        let mes = data.getMonth() + 1;
        data = data.getDate() + "_" + mes + "_" + data.getFullYear();
        let nomeArquivo = req.body.usuario.nome + data + '.jpg';
        FileSystem.writeFile('uploads/usuarios/' + nomeArquivo, foto, {
            encoding: 'base64'
        }, function (error) {
            if (error) {
                res.send(error);
            }
            req.body.usuario.foto = nomeArquivo;
            update(req.body.usuario, req.params.id, res);
        });
    } else {
        update(req.body.usuario, req.params.id, res);
    }  
});

function update(bodyUsuario, id, res) {
    Usuario.update(bodyUsuario, {
        where: {
            id: id
        },
        returning: true
    }).then((usuario) => {
        Endereco.update(bodyUsuario.endereco, {
            where: {
                usuarioId: id
            },
            returning: true
        }).then((endereco) => {
            delete bodyUsuario.senha;
            res.json(bodyUsuario);
        }).catch((error) => result.send(error));
    }).catch((error) => result.send(error));
}


router.delete('/:id', (req, res, next) => {
    Usuario.update({ ativo: false }, {
        where: {
            id: req.params.id
        }
    }).then((res) => {
        res.json(res);
    }).catch((error) => res.send(error));
});