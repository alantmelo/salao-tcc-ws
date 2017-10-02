const router = require('express').Router();
const Funcionario = require('../models/Funcionario');
const Horario = require('../models/Horario');
const Login = require('../models/Login');
const FuncionarioServico = require('../models/FuncionarioServico');
const FileSystem = require('fs');
const Async = require('async');
const Servico = require('../models/Servico');
const FuncionarioHorario = Funcionario.hasOne(Horario, {
    onDelete: 'cascade',
    hooks: true
});
const moment = require('moment');

const FuncionarioServicoHasMany = FuncionarioServico.belongsTo(Funcionario);
const ServicoFuncionarioHasMany = FuncionarioServico.belongsTo(Servico);
var map = { "â": "a", "Â": "A", "à": "a", "À": "A", "á": "a", "Á": "A", "ã": "a", "Ã": "A", "ê": "e", "Ê": "E", "è": "e", "È": "E", "é": "e", "É": "E", "î": "i", "Î": "I", "ì": "i", "Ì": "I", "í": "i", "Í": "I", "õ": "o", "Õ": "O", "ô": "o", "Ô": "O", "ò": "o", "Ò": "O", "ó": "o", "Ó": "O", "ü": "u", "Ü": "U", "û": "u", "Û": "U", "ú": "u", "Ú": "U", "ù": "u", "Ù": "U", "ç": "c", "Ç": "C" };

function removerAcentos(s) { return s.replace(/[\W\[\] ]/g, function (a) { return map[a] || a }) };

module.exports = router;
router.get('/', (req, res, next) => {
    Funcionario.findAll({
        include: [{ all: true }],
    }).then((funcionarios) => {
        let dataResponseArray = [];
        Async.forEach(funcionarios, (funcionario, callback) => {
            FuncionarioServico.findAll({ where: { funcionarioId: funcionario.id.toString() } }).then((servicosData) => {
                let servicosArray = [];
                // console.log(servicosData);
                Async.forEach(servicosData, (servico, callback) => {
                    console.log(servico.id);
                    servicosArray.push(servico.id.toString());
                    callback();
                }, (err) => {
                    if (err) {
                        res.json(err);
                    } else {
                        return;
                    }
                });
                let dataResponse = { funcionario: funcionario, servicos: servicosArray }
                dataResponseArray.push(dataResponse);
                callback();
            }).catch((error) => res.send(error));
        }, (err) => {
            if (err) {
                res.json(err);
            }
            res.json(dataResponseArray);
        });
    }).catch((error) => res.send(error));
});

router.get('/:id', (req, res, next) => {
    Funcionario.find({
        where: {
            id: req.params.id
        },
        include: [{ all: true }],
    }).then((funcionario) => {
        FuncionarioServico.findAll({ where: { funcionarioId: req.params.id } }).then((servicosData) => {
            let servicosArray = [];
            for (let servico of servicosData) {
                servicosArray.push(servico.id.toString());
            }
            funcionario.servicos = "as";// servicosArray;
            console.log(funcionario.servicos);
            let dataResponse = { funcionario: funcionario, servicos: servicosArray }
            res.json(dataResponse);
        }).catch((error) => res.send(error));
    }).catch((error) => res.send(error));
});

router.get('/servico/:servico', (req, res, next) => {
    FuncionarioServico.findAll({ where: { servicoId: req.params.servico }, include: [{ all: true }] }).then((funcionarios) => {
        res.json(funcionarios);
    }).catch((error) => res.send(error.errors))
});

router.get('/horario-disponivel/:funcionario', (req, res, next) => {
    Funcionario.findById(req.params.funcionario, { include: [{ all: true }] }).then((funcionario) => {
        let horarioInicial = funcionario.horario.horarioInicial.split(':', 2);

        let horarioFinal = funcionario.horario.horarioFinal.split(':', 2);

        let horarioEmMinutosMin = (horarioFinal[0] - horarioInicial[0]) * 60;
        horarioEmMinutosMin += (horarioFinal[1] - horarioInicial[1]);
        //Duracao do maior servico
        FuncionarioServico.findAll({ where: { funcionarioId: req.params.funcionario }, include: [{ all: true }] }).then((horarios) => {
            // console.log(funcionarios);
            let duracao = 0;
            Async.forEach(horarios, (horarioServico, callback) => {
                
                if (duracao < horarioServico.servico.tempo) {
                    duracao = horarioServico.servico.tempo;
                }
                callback();
            }, (err) => {
                if (err) {
                    res.send(err);
                } else {
                    let quantidade = Math.floor(horarioEmMinutosMin / duracao);
                    //Descobre quantos horarios vai ter
                    //Aqui haverá os horarios marcardos para esse funcionario - vou colocar fixo só para teste
                    let horariosMarcado = [];
                    let horariosDisponiveis = [];
                    for (let i = 0; i < quantidade; i++){
                        let horaAdicional = Math.floor((duracao * i) / 60);
                        let minutosAdicionais = (duracao * i) % 60;
                        let horario = new Date('', '', '', horarioInicial[0] + horaAdicional, horarioInicial[1] + minutosAdicionais, 0);
                        let hora;
                        let minuto;
                        if (horario.getHours() < 10) {
                            hora = '0' + horario.getHours();
                        } else {
                            hora = horario.getHours();
                        }
                        if (horario.getMinutes() < 10) {
                            minuto = '0' + horario.getMinutes();
                        } else {
                            hora = horario.getMinutes();
                        }
                        let horarioEditado = hora + ':' +  minuto;
                      
                        if (horariosMarcado.some(x => { return x == horarioEditado}) ) {
                            
                        } else {
                            horariosDisponiveis.push(horarioEditado);
                        }
                    }
                    res.json(horariosDisponiveis);
                }
            });

        }).catch((error) => res.send(error.errors));

    }).catch((error) => res.send(error.errors));
});

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
    for (let i = 0; i < req.body.funcionario.servicos.length; i++) {
        let servico = { id: req.body.funcionario.servicos[i] };
        servicos.push(servico);
    }

    req.body.funcionario.horario = horario;
    req.body.funcionario.servicos = servicos;

    let imagem = req.body.funcionario.imagem.replace(/^data:image\/\w+;base64,/, '');
    let data = new Date();
    let mes = data.getMonth() + 1;
    data = data.getDate() + "_" + mes + "_" + data.getFullYear();
    let nomeArquivo = removerAcentos(req.body.funcionario.nome) + data + '.jpg';
    nomeArquivo = nomeArquivo.replace(' ', '');
    console.log(nomeArquivo);
    FileSystem.writeFile('uploads/funcionarios/' + nomeArquivo, imagem, {
        encoding: 'base64'
    }, function (error) {
        if (error) {
            res.send(error);
        } else {
            req.body.funcionario.imagem = nomeArquivo;

            Funcionario.create(req.body.funcionario, {
                include: [{
                    association: FuncionarioHorario,
                }]
            }).then((funcionario) => {
                console.log(req.body.funcionario.servicos.length);
                let contador = req.body.funcionario.servicos.length;
                let flag = 1;
                for (let servico of req.body.funcionario.servicos) {

                    if (contador == flag) {

                        req.body.funcionario.usuarioId = funcionario.id;
                        //tipo 1 funcionario tipo 2 cliente
                        req.body.funcionario.tipo = "1";
                        req.body.funcionario.senha = req.body.funcionario.cpf;
                        Login.create(req.body.funcionario).then((login) => {
                            delete req.body.funcionario.senha;
                            res.json(req.body.funcionario);
                        }).catch((error) => res.send(error.errors));

                    } else {
                        flag++;
                    }
                    let data = { servicoId: servico.id, funcionarioId: funcionario.id }
                    FuncionarioServico.create(data).then((funcionarioServico) => {
                        // res.json(funcionarioServico);

                    }).catch((error) => res.send(error.errors));
                }
            }).catch((error) => res.send(error.errors))
        }
    });
});

router.put('/:id', (req, res, next) => {
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
    for (let i = 0; i < req.body.funcionario.servicos.length; i++) {
        let servico = { id: req.body.funcionario.servicos[i] };
        servicos.push(servico);
    }

    req.body.funcionario.horario = horario;
    req.body.funcionario.servicos = servicos;

    if (req.body.funcionario.imagem == "" || req.body.funcionario.imagem == undefined) {
        updateFuncionario(req.body.funcionario, id);
    } else {

        let imagem = req.body.funcionario.imagem.replace(/^data:image\/\w+;base64,/, '');
        let data = new Date();
        let mes = data.getMonth() + 1;
        data = data.getDate() + "_" + mes + "_" + data.getFullYear();
        let nomeArquivo = removerAcentos(req.body.funcionario.nome) + data + '.jpg';
        console.log(nomeArquivo);
        FileSystem.writeFile('uploads/funcionarios/' + nomeArquivo, imagem, {
            encoding: 'base64'
        }, function (error) {
            if (error) {
                res.send(error);
            } else {
                req.body.funcionario.imagem = nomeArquivo;

                updateFuncionario(req.body.funcionario, req.params.id);

            }
        });

    }

});

function updateFuncionario(funcionario, id) {

    Funcionario.update(funcionario, {
        where: {
            id: id
        },
        include: [{
            association: FuncionarioHorario,
        }]
    }).then((funcionario) => {

        let contador = req.body.funcionario.servicos.length;
        let flag = 1;
        for (let servico of req.body.funcionario.servicos) {

            if (contador == flag) {

                req.body.funcionario.usuarioId = funcionario.id;
                //tipo 1 funcionario tipo 2 cliente
                req.body.funcionario.tipo = "1";
                // req.body.funcionario.senha = req.body.funcionario.cpf;
                Login.update(req.body.funcionario,
                    { where: { usuarioId: id } }).then((login) => {
                        delete req.body.funcionario.senha;
                        res.json(req.body.funcionario);
                    }).catch((error) => res.send(error.errors));

            } else {
                flag++;
            }
            let data = { servicoId: servico.id, funcionarioId: funcionario.id }
            FuncionarioServico.update(data, {
                where: {
                    funcionarioId: id
                }
            }).then((funcionarioServico) => {
                // res.json(funcionarioServico);

            }).catch((error) => res.send(error.errors));
        }
    }).catch((error) => res.send(error.errors))
}

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