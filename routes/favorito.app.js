const router = require('express').Router();
const UsuarioApp = require('../models/Usuario-App');
const Favorito = require('../models/Favorito');
const Usuario = require('../models/Usuario');
module.exports = router;
const FavoritosIgreja = Favorito.belongsTo(Usuario);
const FavoritosUsuarioApp = Favorito.belongsTo(UsuarioApp);

router.post('/', (req, res, next) => {
    Favorito.create(req.body.favorito)
        .then((favorito) => {
            res.json(missa);
        }).catch((error) => res.send(error));
});
router.delete('/:igreja/:usuario', (req, res, next) => {
    Favorito.destroy({
        where: {
            usuarioId: req.params.igreja,
            usuarioAppId : req.params.usuario
       }
    }).then((deletado) => {
        res.send("Favorito da igreja" + req.params.igreja + "  e usuario " + req.params.usuario + " deletado");
    } ).catch((error) => {
        res.send(error);
   })
});