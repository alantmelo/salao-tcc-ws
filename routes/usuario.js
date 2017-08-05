const router = require('express').Router();

const Usuario = require('../models/Usuario');
const Endereco = require('../models/Endereco');
const FileSystem = require('fs');
const CreatorAssociation = Usuario.hasOne(Endereco);
module.exports = router;


router.get('/', (req, res, next) => {
    Usuario.findAll({
        // where: {
        //     ativo: true
        // },
        include: [{
            all: true
        }],
        attributes: {
            // exclude: ['senha']
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

var map = { "â": "a", "Â": "A", "à": "a", "À": "A", "á": "a", "Á": "A", "ã": "a", "Ã": "A", "ê": "e", "Ê": "E", "è": "e", "È": "E", "é": "e", "É": "E", "î": "i", "Î": "I", "ì": "i", "Ì": "I", "í": "i", "Í": "I", "õ": "o", "Õ": "O", "ô": "o", "Ô": "O", "ò": "o", "Ò": "O", "ó": "o", "Ó": "O", "ü": "u", "Ü": "U", "û": "u", "Û": "U", "ú": "u", "Ú": "U", "ù": "u", "Ù": "U", "ç": "c", "Ç": "C" };

function removerAcentos(s) { return s.replace(/[\W\[\] ]/g, function (a) { return map[a] || a }) };

router.post('/', (req, res, next) => {

    // console.log(removerAcentos('ParóquiaSantaLuziadeSiracusa17_7_2017'));
    let foto = req.body.usuario.foto.replace(/^data:image\/\w+;base64,/, '');
    let data = new Date();
    let mes = data.getMonth() + 1;
    data = data.getDate() + "_" + mes + "_" + data.getFullYear();
    let nomedocumento = req.body.usuario.nome.split(' ').join("");
    let nomeArquivo = removerAcentos(nomedocumento) + data + '.jpg';
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
	console.log(usuario);            
res.json(req.body.usuario);
        }).catch((error) => res.send(error));
    });
});



router.put('/:id', (req, res, next) => {
    let foto = req.body.usuario.foto;
    if (foto.length > 50) {
        let foto = req.body.usuario.foto.replace(/^data:image\/\w+;base64,/, '');
        let data = new Date();
        let mes = data.getMonth() + 1;
        data = data.getDate() + "_" + mes + "_" + data.getFullYear();
	let nomedocumento = req.body.usuario.nome.split(" ").join( "" );
    let nomeArquivo = removerAcentos(nomedocumento) + data + '.jpg';
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
        }).catch((error) => res.send(error));
    }).catch((error) => res.send(error));
}


router.delete('/:id', (req, res, next) => {
    Usuario.update({ ativo: false }, {
        where: {
            id: req.params.id
        }
    }).then((res) => {
        res.send("Id " + req.params.id + " foi deletado");
    }).catch((error) => res.send(error));
});
