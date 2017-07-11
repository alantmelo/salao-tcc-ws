const router = require('express').Router();
const SantoDia = require('../models/Santo-Dia');
const Sequelize = require("sequelize");

module.exports = router;

router.get('/', (req, res, next) => {
    let data = new Date();
    let mes = data.getUTCMonth() + 1;
    let dia = data.getUTCDate();
    console.log(mes + " " + dia);
    SantoDia.findAll({
        where: {
            dia: dia,
            mes : mes
        }
    }).then((missa) => {
        res.json(missa);
    }).catch((error) => res.send(error));
});