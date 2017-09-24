const Sequelize = require('sequelize');
const db = require('../db');
const Categoria = db.define('categorias', {
    'nome': {
        type: Sequelize.STRING,
        validate: {
            len: {
                args: [1, 150],
                msg: "Favor o campo nome deve ter no minimo 6 caracters e no máximo 150"
            }
        }
    },
    "imagem": {
        type: Sequelize.STRING,
        validate: {
            notEmpty: {
                args: [true],
                msg: "Campo Foto Vazio"
            }
        }
    },
});
module.exports = Categoria;
