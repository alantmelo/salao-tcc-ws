const router = require('express').Router();
const Funcionario = require('../models/Funcionario');
const Horario = require('../models/Horario');
const Login = require('../models/Login');
const FuncionarioServico = require('../models/FuncionarioServico');
// const Servico = require('../models/Servico');
const FuncionarioHorario = Funcionario.hasOne(Horario, {
    onDelete: 'cascade',
    hooks: true
});

module.exports = router;
// router.get('/:id/:idUsuario', (req, res, next) => {
//     Missa.findById(req.params.id, {
//         where: {
//             usuarioId : req.params.idUsuario
//         },
//         include: [
//             { model: Horario, as: 'horario' },
//             {
//                 association: MissaUsuario, as: 'igreja', attributes: {
//                     exclude: ['senha']
//                 }
//             },
//             { association: MissaPadre, as: 'padre' },
//             { association: MissaTipoMissa, as: 'tipomissa' }
//         ]
//     }).then((missas) => {
//         res.json(missas);
//     }).catch((error) => res.send(error));
// });

// router.get('/:idUsuario', (req, res, next) => {
//     Missa.findAll({
//         where: {
//             usuarioId: req.params.idUsuario  
//         },
//         include: [
//             { model: Horario, as: 'horario' },
//             {
//                 association: MissaUsuario, as: 'igreja', attributes: {
//                     exclude: ['senha']
//                 } },
//             { association: MissaPadre, as: 'padre' },
//             {association: MissaTipoMissa, as: 'tipomissa'}
//         ]
//     }).then((missas) => {
//         res.json(missas);
//     }).catch((error) => res.send(error));
// });

router.post('/', (req, res, next) => {
    horario = {
        segunda: false,
        terca: false,
        quarta: false,
        quinta: false,
        sexta: false,
        sabado: false,
        domingo: false,
        horarioInicial: req.body.funcionario.horarioInicial,
        horarioFinal: req.body.funcionario.horarioFinal
    };
    servicos = [];
    for (let h of req.body.funcionario.horarios) {
        horario[h.atributo] = h.checked;
    }
    for (let i = 0; i < req.body.funcionario.servicos.length; i++){
        let servico = { id: req.body.funcionario.servicos[i] };
        servicos.push(servico);
    }
    console.log(servicos);
    
    req.body.funcionario.horarios = horario;
    req.body.funcionario.servicos = servicos;

    res.send(req.body.funcionario);


    // Funcionario.create(req.body.funcionario, {
    //     include: [{
    //         association: FuncionarioHorario,            
    //     }]
    // }).then((funcionario) => {
    //     res.json(funcionario);
    //     for (let servico of req.body.funcionario.servicos) {
    //         console.log(servico);
    //         let data = { servicoId  : servico.id, funcionarioId: funcionario.id }
    //         FuncionarioServico.create(data).then((funcionarioServico) => {
    //             res.json(funcionarioServico);

    //         }).catch((error) => res.send(error.errors));
    //     }

    //     // req.body.funcionario.usuarioId = funcionario.id;
    //     // //tipo 1 funcionario tipo 2 cliente
    //     // req.body.funcionario.tipo = "1";
    //     // req.body.funcionario.senha = req.body.funcionario.cpf;
    //     // Login.create(req.body.funcionario).then((login) => {
    //     //     delete req.body.funcionario.senha;
    //     //     res.json(req.body.cliente);
    //     // }).catch((error) => res.send(error.errors));
    // }).catch((error) => res.send(error.errors));
});

router.put('/:id', (req, res, next) => {
    Cliente.update(req.body.cliente, {
        where: {
            id: req.params.id
        },
        returning: true
    }).then((cliente) => {
        Login.update(req.body.cliente, {
            where: {
                usuarioId: req.params.id
            }
        }
        ).then((login) => {
            res.json(req.body.cliente);
        }).catch((error) => res.send(error.errors));
    }).catch((error) => res.send(error.errors));
});

// router.delete('/:id', (req, res, next) => {
//     Horario.destroy({
//         where: {
//             missaId: req.params.id
//         }
//     }).then((horario) => {
//         Missa.destroy({
//             where: {
//                 id: req.params.id
//             },
//         }).then((missa) => {
//             res.send("Missa deletada com sucesso");
//         }).catch((error) => {
//             res.send(error);
//         })
//     }).catch((error) => {
//         res.send(error);
//     });
// });