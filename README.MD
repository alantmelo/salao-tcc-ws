FORMAT: 1A
HOST: http://104.131.169.248:3000/

,falta colcoar os allowNull: false nos models


# AHoraDaMissa API

## Igreja [WEB] [/v1/web/igreja]
### Get Igreja [GET]  [/v1/web/igreja/:id]

+ Response 200 (application/json)

        + Body

            {
                "id": 8,
                "nome": "Robertooo",
                "nome_responsavel": "dasdasdas",
                "cnpj": "123456789",
                "email": "rm@gmail.com",
                "ativo": true,
                "foto" : "nomedafoto",
                "telefone": "123123213",
                "createdAt": "2017-06-18T12:57:42.366Z",
                "updatedAt": "2017-06-18T14:03:57.527Z",
                "endereco": {
                    "id": 4,
                    "cep": "123456789",
                    "logradouro": "dddsadsadas",
                    "complemento": "das",
                    "bairro": "dsa",
                    "cidade": "Maceió",
                    "estado": "das",
                    "numero": "asd",
                    "longitude": " -35.722786",
                    "latitude": "-9.668861",
                    "createdAt": "2017-06-18T12:57:42.507Z",
                    "updatedAt": "2017-06-18T14:03:57.869Z",
                    "usuarioId": 8
                }
            }

### Get Igrejas [GET]  [/v1/web/igreja]

+ Response 200 (application/json)

        + Body
        [
            {
                "id": 8,
                "nome": "Robertooo",
                "nome_responsavel": "dasdasdas",
                "cnpj": "123456789",
                "email": "rm@gmail.com",
                "ativo": true,
                "foto" : "nomedafoto",
                "telefone": "123123213",
                "createdAt": "2017-06-18T12:57:42.366Z",
                "updatedAt": "2017-06-18T14:03:57.527Z",
                "endereco": {
                    "id": 4,
                    "cep": "123456789",
                    "logradouro": "dddsadsadas",
                    "complemento": "das",
                    "bairro": "dsa",
                    "cidade": "Maceió",
                    "estado": "das",
                    "numero": "asd",
                    "longitude": " -35.722786",
                    "latitude": "-9.668861",
                    "createdAt": "2017-06-18T12:57:42.507Z",
                    "updatedAt": "2017-06-18T14:03:57.869Z",
                    "usuarioId": 8
                }
            },
            {
                "id": 7,
                "nome": "Roberto",
                "nome_responsavel": "dasdasdas",
                "cnpj": "123456789",
                "email": "rm@gmail.com",
                "ativo": true,
                "foto" : "nomedafoto",
                "telefone": "123123213",
                "createdAt": "2017-06-18T12:57:23.290Z",
                "updatedAt": "2017-06-18T12:57:23.290Z",
                "endereco": {
                    "id": 3,
                    "cep": "123456789",
                    "logradouro": "das",
                    "complemento": "das",
                    "bairro": "dsa",
                    "cidade": "Maceió",
                    "estado": "das",
                    "numero": "asd",
                    "longitude": " -35.722786",
                    "latitude": "-9.668861",
                    "createdAt": "2017-06-18T12:57:23.438Z",
                    "updatedAt": "2017-06-18T12:57:23.438Z",
                    "usuarioId": 7
                }
            }
        ]

### Inserir Igreja [POST] [/v1/web/igreja] [PUT] [/v1/web/igreja/:id]

+ Request (application/json)

        {
            "usuario" : {
                "nome":"Robertooo",
                "nome_responsavel": "dasdasdas",
                "cnpj":"123456789",
                "email" :"rm@gmail.com",
                "ativo" :false,
                "foto" : "BASE64",
                "telefone":"123123213",
                "senha":"123564",
                "endereco" : {
                    "cep":"123456789",
                    "logradouro":"dddsadsadas",
                    "complemento":"das",
                    "bairro":"dsa",
                    "cidade":"das",
                    "estado":"das",
                    "numero":"asd",
                    "longitude":"asd",
                    "latitude":"das"
                    }
            }
        }

+ Response 201 (application/json)

        + Body
    
           {
                "id": 6,
                "nome": "Roberto",
                "nome_responsavel": "dasdasdas",
                "cnpj": "123456789",
                "email": "rm@gmail.com",
                "ativo": true,
                "foto" : "nomedafoto",
                "telefone": "123123213",
                "createdAt": "2017-06-18T12:57:07.054Z",
                "updatedAt": "2017-06-18T14:58:34.299Z",
                "endereco": {
                    "id": 2,
                    "cep": "123456789",
                    "logradouro": "das",
                    "complemento": "das",
                    "bairro": "dsa",
                    "cidade": "das",
                    "estado": "das",
                    "numero": "asd",
                    "longitude": " -35.722786",
                    "latitude": "-9.668861",
                    "createdAt": "2017-06-18T12:57:07.111Z",
                    "updatedAt": "2017-06-18T12:57:07.111Z",
                    "usuarioId": 6
                }
            }


## Igreja [APP] [/v1/app/igreja]
### Get Igreja [GET] [/v1/app/igreja/id/:id/:origem(latitude,longitude)/:idusuarioapp]  
    #### Exemplo url [host/v1/app/igreja/id/8/-9.652532,-35.735195/]

+ Response 201 (application/json)

        + Body

            {
                "id": 8,
                "nome": "Robertooo",
                "nome_responsavel": "dasdasdas",
                "cnpj": "123456789",
                "email": "rm@gmail.com",
                "ativo": true,
                "foto" : "nomedafoto",
                "telefone": "123123213",
                "createdAt": "2017-06-18T12:57:42.366Z",
                "updatedAt": "2017-06-18T14:03:57.527Z",
                "endereco": {
                    "id": 4,
                    "cep": "123456789",
                    "logradouro": "dddsadsadas",
                    "complemento": "das",
                    "bairro": "dsa",
                    "cidade": "Maceió",
                    "estado": "das",
                    "numero": "asd",
                    "longitude": " -35.722786",
                    "latitude": "-9.668861",
                    "createdAt": "2017-06-18T12:57:42.507Z",
                    "updatedAt": "2017-06-18T14:03:57.869Z",
                    "usuarioId": 8
                },
                "distancia": "3.6 km"
            }

### Get Igrejas [GET] [/v1/app/igreja/:origem/:cidade]
    #### Exemplo url [host/v1/app/igreja/-9.652532,-35.735195/Maceió]

+ Response 201 (application/json)

        + Body

            [
                {
                    "id": 7,
                    "nome": "Roberto",
                    "nome_responsavel": "dasdasdas",
                    "cnpj": "123456789",
                    "email": "rm@gmail.com",
                    "ativo": true,
                    "foto" : "nomedafoto",
                    "telefone": "123123213",
                    "createdAt": "2017-06-18T12:57:23.290Z",
                    "updatedAt": "2017-06-18T12:57:23.290Z",
                    "endereco": {
                        "id": 3,
                        "cep": "123456789",
                        "logradouro": "das",
                        "complemento": "das",
                        "bairro": "dsa",
                        "cidade": "Maceió",
                        "estado": "das",
                        "numero": "asd",
                        "longitude": " -35.722786",
                        "latitude": "-9.668861",
                        "createdAt": "2017-06-18T12:57:23.438Z",
                        "updatedAt": "2017-06-18T12:57:23.438Z",
                        "usuarioId": 7
                    },
                    "distancia": "3.6 km"
                },
                {
                    "id": 8,
                    "nome": "Robertooo",
                    "nome_responsavel": "dasdasdas",
                    "cnpj": "123456789",
                    "email": "rm@gmail.com",
                    "ativo": true,
                    "telefone": "123123213",
                    "createdAt": "2017-06-18T12:57:42.366Z",
                    "updatedAt": "2017-06-18T14:03:57.527Z",
                    "endereco": {
                        "id": 4,
                        "cep": "123456789",
                        "logradouro": "dddsadsadas",
                        "complemento": "das",
                        "bairro": "dsa",
                        "cidade": "Maceió",
                        "estado": "das",
                        "numero": "asd",
                        "longitude": " -35.722786",
                        "latitude": "-9.668861",
                        "createdAt": "2017-06-18T12:57:42.507Z",
                        "updatedAt": "2017-06-18T14:03:57.869Z",
                        "usuarioId": 8
                    },
                    "distancia": "3.6 km"
                }
            ]

## Padre [WEB] [/v1/web/padre]
### Get Padre [GET]  [/v1/web/padre/:id]

+ Response 200 (application/json)

        + Body

            {
                "id": 4,
                "nome": "das",
                "createdAt": "2017-06-28T23:15:36.840Z",
                "updatedAt": "2017-06-28T23:15:36.840Z",
                "usuarioId": 1
            }

### Get Padres [GET]  [/v1/web/padre]

+ Response 200 (application/json)

        + Body
        [
            {
                "id": 1,
                "nome": null,
                "createdAt": "2017-06-28T23:08:10.835Z",
                "updatedAt": "2017-06-28T23:08:10.835Z",
                "usuarioId": null
            },
            {
                "id": 3,
                "nome": "",
                "createdAt": "2017-06-28T23:09:47.147Z",
                "updatedAt": "2017-06-28T23:09:47.147Z",
                "usuarioId": 1
            },
            {
                "id": 4,
                "nome": "das",
                "createdAt": "2017-06-28T23:15:36.840Z",
                "updatedAt": "2017-06-28T23:15:36.840Z",
                "usuarioId": 1
            }
        ]

### Get Padres By Id Igreja [GET]  [/v1/web/padre/byigreja/:id]

+ Response 200 (application/json)

        + Body
        [
            {
                "id": 3,
                "nome": "",
                "createdAt": "2017-06-28T23:09:47.147Z",
                "updatedAt": "2017-06-28T23:09:47.147Z",
                "usuarioId": 1
            },
            {
                "id": 4,
                "nome": "das",
                "createdAt": "2017-06-28T23:15:36.840Z",
                "updatedAt": "2017-06-28T23:15:36.840Z",
                "usuarioId": 1
            }
        ]

### Inserir Padre [POST] [/v1/web/padre] [PUT] [/v1/web/padre/:id]

+ Request (application/json)

        {
            "padre" : {
            "nome" : "dda",
            "usuarioId": 1
            }
        }

+ Response 201 (application/json)

        + Body
    
           {
                "id": 5,
                "nome": "dda",
                "usuarioId": 1,
                "updatedAt": "2017-06-28T23:47:36.278Z",
                "createdAt": "2017-06-28T23:47:36.278Z"
            }

### Deletar Padre [DELETE] [/v1/web/padre/:id]

+ Response 201 (application/json)

        + Body
    
           "Padre deletado com sucesso"

## Tipo Tipo Missa [WEB] [/v1/web/tipomissa]
### Get Tipo Missa [GET]  [/v1/web/tipomissa/:id]

+ Response 200 (application/json)

        + Body

            {
                "id": 1,
                "nome": "Missa",
                "createdAt": "2017-06-29T00:31:07.959Z",
                "updatedAt": "2017-06-29T00:31:07.959Z"
            }

### Get Tipo Missas [GET]  [/v1/web/tipomissa]

+ Response 200 (application/json)

        + Body
        [
            {
                "id": 1,
                "nome": "Missa",
                "createdAt": "2017-06-29T00:31:07.959Z",
                "updatedAt": "2017-06-29T00:31:07.959Z"
            },
            {
                "id": 2,
                "nome": "Missa",
                "createdAt": "2017-06-29T00:31:12.302Z",
                "updatedAt": "2017-06-29T00:31:12.302Z"
            }
        ]

### Inserir Tipo Missa [POST] [/v1/web/tipomissa] [PUT] [/v1/web/tipomissa/:id]

+ Request (application/json)

        {
            "tipo_missa" : {
                "nome": "Missa"
            }
        }

+ Response 201 (application/json)

        + Body
    
           {
                "id": 5,
                "nome": "Missa",
                "updatedAt": "2017-06-29T00:36:58.652Z",
                "createdAt": "2017-06-29T00:36:58.652Z"
            }

### Deletar Tipo Missa [DELETE] [/v1/web/tipomissa/:id]

+ Response 201 (application/json)

        + Body
    
           "Tipo Missa deletado com sucesso"

## Missa [WEB] [/v1/web/missa]
### Get Missa [GET]  [/v1/web/missa/:id/:idUsuario]

+ Response 200 (application/json)

        + Body

            {
                "id": 1,
                "hora": "20:00",
                "repete": true,
                "createdAt": "2017-06-30T17:07:18.455Z",
                "updatedAt": "2017-06-30T17:07:18.455Z",
                "usuarioId": 1,
                "padreId": 4,
                "tipoMissaId": 1,
                "horario": {
                    "id": 12,
                    "segunda": true,
                    "terca": true,
                    "quarta": true,
                    "quinta": false,
                    "sexta": true,
                    "sabado": true,
                    "domingo": true,
                    "createdAt": "2017-06-30T17:07:19.815Z",
                    "updatedAt": "2017-06-30T17:07:19.815Z",
                    "missaId": 1
                },
                "usuario": {
                    "id": 1,
                    "nome": "Robertooo",
                    "nome_responsavel": "dasdasdas",
                    "cnpj": "123456789",
                    "email": "rm@gmail.com",
                    "ativo": true,
                    "telefone": "123123213",
                    "createdAt": "2017-06-19T02:01:21.787Z",
                    "updatedAt": "2017-06-19T02:01:21.787Z"
                },
                "padre": {
                    "id": 4,
                    "nome": "das",
                    "createdAt": "2017-06-28T23:15:36.840Z",
                    "updatedAt": "2017-06-28T23:15:36.840Z",
                    "usuarioId": 1
                },
                "tipo_missa": {
                    "id": 1,
                    "nome": "Missa",
                    "createdAt": "2017-06-29T00:31:07.959Z",
                    "updatedAt": "2017-06-29T00:31:07.959Z"
                }
            }

### Get Missas [GET]  [/v1/web/missa/:idUsuario]

+ Response 200 (application/json)

        + Body
        [
            {
                "id": 1,
                "hora": "20:00",
                "repete": true,
                "createdAt": "2017-06-30T17:07:18.455Z",
                "updatedAt": "2017-06-30T17:07:18.455Z",
                "usuarioId": 1,
                "padreId": 4,
                "tipoMissaId": 1,
                "horario": {
                    "id": 12,
                    "segunda": true,
                    "terca": true,
                    "quarta": true,
                    "quinta": false,
                    "sexta": true,
                    "sabado": true,
                    "domingo": true,
                    "createdAt": "2017-06-30T17:07:19.815Z",
                    "updatedAt": "2017-06-30T17:07:19.815Z",
                    "missaId": 1
                },
                "usuario": {
                    "id": 1,
                    "nome": "Robertooo",
                    "nome_responsavel": "dasdasdas",
                    "cnpj": "123456789",
                    "email": "rm@gmail.com",
                    "ativo": true,
                    "telefone": "123123213",
                    "createdAt": "2017-06-19T02:01:21.787Z",
                    "updatedAt": "2017-06-19T02:01:21.787Z"
                },
                "padre": {
                    "id": 4,
                    "nome": "das",
                    "createdAt": "2017-06-28T23:15:36.840Z",
                    "updatedAt": "2017-06-28T23:15:36.840Z",
                    "usuarioId": 1
                },
                "tipo_missa": {
                    "id": 1,
                    "nome": "Missa",
                    "createdAt": "2017-06-29T00:31:07.959Z",
                    "updatedAt": "2017-06-29T00:31:07.959Z"
                }
            },
            {
                "id": 2,
                "hora": "20:00",
                "repete": true,
                "createdAt": "2017-06-30T17:08:23.878Z",
                "updatedAt": "2017-06-30T17:08:23.878Z",
                "usuarioId": 1,
                "padreId": 4,
                "tipoMissaId": 1,
                "horario": {
                    "id": 13,
                    "segunda": true,
                    "terca": true,
                    "quarta": true,
                    "quinta": false,
                    "sexta": true,
                    "sabado": true,
                    "domingo": true,
                    "createdAt": "2017-06-30T17:08:24.008Z",
                    "updatedAt": "2017-06-30T17:08:24.008Z",
                    "missaId": 2
                },
                "usuario": {
                    "id": 1,
                    "nome": "Robertooo",
                    "nome_responsavel": "dasdasdas",
                    "cnpj": "123456789",
                    "email": "rm@gmail.com",
                    "ativo": true,
                    "telefone": "123123213",
                    "createdAt": "2017-06-19T02:01:21.787Z",
                    "updatedAt": "2017-06-19T02:01:21.787Z"
                },
                "padre": {
                    "id": 4,
                    "nome": "das",
                    "createdAt": "2017-06-28T23:15:36.840Z",
                    "updatedAt": "2017-06-28T23:15:36.840Z",
                    "usuarioId": 1
                },
                "tipo_missa": {
                    "id": 1,
                    "nome": "Missa",
                    "createdAt": "2017-06-29T00:31:07.959Z",
                    "updatedAt": "2017-06-29T00:31:07.959Z"
                }
            }
        ]

### Inserir Missa [POST] [/v1/web/missa] [PUT] [/v1/web/missa/:id]

+ Request (application/json)

        { 
            "missa" : {
                "tipoMissaId": 1,
                "hora" : "20:00",
                "usuarioId": 1,
                "repete": true, 
                "padreId" : 4,
                "horario" : {
                    "segunda" : true,
                    "terca"  : true, 
                    "quarta" : true, 
                    "quinta" : false, 
                    "sexta" : true, 
                    "sabado" : true,
                    "domingo" : true
                }
            }
        }

+ Response 201 (application/json)

        + Body
    
           {
                "id": 3,
                "tipoMissaId": 1,
                "hora": "20:00",
                "usuarioId": 1,
                "repete": true,
                "padreId": 4,
                "horario": {
                    "id": 14,
                    "segunda": true,
                    "terca": true,
                    "quarta": true,
                    "quinta": false,
                    "sexta": true,
                    "sabado": true,
                    "domingo": true,
                    "missaId": 3,
                    "updatedAt": "2017-07-01T04:14:48.145Z",
                    "createdAt": "2017-07-01T04:14:48.145Z"
                },
                "updatedAt": "2017-07-01T04:14:48.098Z",
                "createdAt": "2017-07-01T04:14:48.098Z"
            }


## Missa [APP] [/v1/app/missa]
### Get Missa [GET] [/v1/app/missa/id/:id/:origem(latitude,longitude)]  
    #### Exemplo url [host/v1/app/missa/id/8/-9.652532,-35.735195/]

+ Response 201 (application/json)

        + Body

            {
                "id": 1,
                "hora": "20:00",
                "repete": true,
                "createdAt": "2017-06-30T17:07:18.455Z",
                "updatedAt": "2017-06-30T17:07:18.455Z",
                "usuarioId": 1,
                "padreId": 4,
                "tipoMissaId": 1,
                "horario": {
                    "id": 12,
                    "segunda": true,
                    "terca": true,
                    "quarta": true,
                    "quinta": false,
                    "sexta": true,
                    "sabado": true,
                    "domingo": true,
                    "createdAt": "2017-06-30T17:07:19.815Z",
                    "updatedAt": "2017-06-30T17:07:19.815Z",
                    "missaId": 1
                },
                "usuario": {
                    "id": 1,
                    "nome": "Robertooo",
                    "nome_responsavel": "dasdasdas",
                    "cnpj": "123456789",
                    "email": "rm@gmail.com",
                    "ativo": true,
                    "telefone": "123123213",
                    "createdAt": "2017-06-19T02:01:21.787Z",
                    "updatedAt": "2017-06-19T02:01:21.787Z",
                    "endereco": {
                        "id": 1,
                        "cep": "123456789",
                        "logradouro": "dddas",
                        "complemento": "das",
                        "bairro": "dsa",
                        "cidade": "Maceió",
                        "estado": "das",
                        "numero": "asd",
                        "longitude": "-35.704802",
                        "latitude": "-9.645770",
                        "createdAt": "2017-06-19T02:01:21.929Z",
                        "updatedAt": "2017-06-19T02:01:21.929Z",
                        "usuarioId": 1,
                        "eventoId": null
                    }
                },
                "padre": {
                    "id": 4,
                    "nome": "das",
                    "createdAt": "2017-06-28T23:15:36.840Z",
                    "updatedAt": "2017-06-28T23:15:36.840Z",
                    "usuarioId": 1
                },
                "tipo_missa": {
                    "id": 1,
                    "nome": "Missa",
                    "createdAt": "2017-06-29T00:31:07.959Z",
                    "updatedAt": "2017-06-29T00:31:07.959Z"
                },
                "distancia": "4.1 km"
            }

### Get Missas [GET] [/v1/app/missa/:origem/:cidade]
    #### Exemplo url [host/v1/app/missa/-9.652532,-35.735195/Maceió]

+ Response 201 (application/json)

        + Body

            [
                {
                    "id": 1,
                    "hora": "20:00",
                    "repete": true,
                    "createdAt": "2017-06-30T17:07:18.455Z",
                    "updatedAt": "2017-06-30T17:07:18.455Z",
                    "usuarioId": 1,
                    "padreId": 4,
                    "tipoMissaId": 1,
                    "horario": {
                        "id": 12,
                        "segunda": true,
                        "terca": true,
                        "quarta": true,
                        "quinta": false,
                        "sexta": true,
                        "sabado": true,
                        "domingo": true,
                        "createdAt": "2017-06-30T17:07:19.815Z",
                        "updatedAt": "2017-06-30T17:07:19.815Z",
                        "missaId": 1
                    },
                    "usuario": {
                        "id": 1,
                        "nome": "Robertooo",
                        "nome_responsavel": "dasdasdas",
                        "cnpj": "123456789",
                        "email": "rm@gmail.com",
                        "ativo": true,
                        "telefone": "123123213",
                        "createdAt": "2017-06-19T02:01:21.787Z",
                        "updatedAt": "2017-06-19T02:01:21.787Z",
                        "endereco": {
                            "id": 1,
                            "cep": "123456789",
                            "logradouro": "dddas",
                            "complemento": "das",
                            "bairro": "dsa",
                            "cidade": "Rio",
                            "estado": "das",
                            "numero": "asd",
                            "longitude": "-35.704802",
                            "latitude": "-9.645770",
                            "createdAt": "2017-06-19T02:01:21.929Z",
                            "updatedAt": "2017-06-19T02:01:21.929Z",
                            "usuarioId": 1,
                            "eventoId": null
                        }
                    },
                    "padre": {
                        "id": 4,
                        "nome": "das",
                        "createdAt": "2017-06-28T23:15:36.840Z",
                        "updatedAt": "2017-06-28T23:15:36.840Z",
                        "usuarioId": 1
                    },
                    "tipo_missa": {
                        "id": 1,
                        "nome": "Missa",
                        "createdAt": "2017-06-29T00:31:07.959Z",
                        "updatedAt": "2017-06-29T00:31:07.959Z"
                    },
                    "distancia": "4.1 km"
                },
                {
                    "id": 2,
                    "hora": "20:00",
                    "repete": true,
                    "createdAt": "2017-06-30T17:08:23.878Z",
                    "updatedAt": "2017-06-30T17:08:23.878Z",
                    "usuarioId": 1,
                    "padreId": 4,
                    "tipoMissaId": 1,
                    "horario": {
                        "id": 13,
                        "segunda": true,
                        "terca": true,
                        "quarta": true,
                        "quinta": false,
                        "sexta": true,
                        "sabado": true,
                        "domingo": true,
                        "createdAt": "2017-06-30T17:08:24.008Z",
                        "updatedAt": "2017-06-30T17:08:24.008Z",
                        "missaId": 2
                    },
                    "usuario": {
                        "id": 1,
                        "nome": "Robertooo",
                        "nome_responsavel": "dasdasdas",
                        "cnpj": "123456789",
                        "email": "rm@gmail.com",
                        "ativo": true,
                        "telefone": "123123213",
                        "createdAt": "2017-06-19T02:01:21.787Z",
                        "updatedAt": "2017-06-19T02:01:21.787Z",
                        "endereco": {
                            "id": 1,
                            "cep": "123456789",
                            "logradouro": "dddas",
                            "complemento": "das",
                            "bairro": "dsa",
                            "cidade": "Rio",
                            "estado": "das",
                            "numero": "asd",
                            "longitude": "-35.704802",
                            "latitude": "-9.645770",
                            "createdAt": "2017-06-19T02:01:21.929Z",
                            "updatedAt": "2017-06-19T02:01:21.929Z",
                            "usuarioId": 1,
                            "eventoId": null
                        }
                    },
                    "padre": {
                        "id": 4,
                        "nome": "das",
                        "createdAt": "2017-06-28T23:15:36.840Z",
                        "updatedAt": "2017-06-28T23:15:36.840Z",
                        "usuarioId": 1
                    },
                    "tipo_missa": {
                        "id": 1,
                        "nome": "Missa",
                        "createdAt": "2017-06-29T00:31:07.959Z",
                        "updatedAt": "2017-06-29T00:31:07.959Z"
                    },
                    "distancia": "4.1 km"
                }
            ]

## Evento [WEB] [/v1/web/evento]
### Get Evento [GET]  [/v1/web/evento/:id]

+ Response 200 (application/json)

        + Body

            {
                "id": 4,
                "nome_local": "Robertooo",
                "nome_evento": "dasdasdas",
                "detalhe": "123456789",
                "foto": "dasdasdas3_7_2017.jpg",
                "data_inicio": "2017-09-01T00:00:00.000Z",
                "data_termino": "2017-09-02T00:00:00.000Z",
                "preco": 12.5,
                "link": "1235dsadasdsads64",
                "createdAt": "2017-07-03T21:57:08.823Z",
                "updatedAt": "2017-07-03T21:57:08.823Z",
                "tipoEventoId": 1,
                "usuarioId": 1,
                "endereco": {
                    "id": 23,
                    "cep": "123456789",
                    "logradouro": "dddsadsadas",
                    "complemento": "das",
                    "bairro": "dsa",
                    "cidade": "Rio",
                    "estado": "das",
                    "numero": "asd",
                    "longitude": "-35.704802",
                    "latitude": "-9.645770",
                    "createdAt": "2017-07-03T21:57:08.990Z",
                    "updatedAt": "2017-07-03T21:57:08.990Z",
                    "usuarioId": null,
                    "eventoId": 4
                },
                "usuario": {
                    "id": 1,
                    "nome": "Robertooo",
                    "nome_responsavel": "dasdasdas",
                    "cnpj": "123456789",
                    "email": "rm@gmail.com",
                    "ativo": true,
                    "telefone": "123123213",
                    "createdAt": "2017-06-19T02:01:21.787Z",
                    "updatedAt": "2017-06-19T02:01:21.787Z"
                },
                "tipo_evento": {
                    "id": 1,
                    "nome": "Show2",
                    "createdAt": "2017-06-19T02:05:19.450Z",
                    "updatedAt": "2017-06-19T02:05:19.450Z"
                }
            }

### Get Eventos [GET]  [/v1/web/evento/]

+ Response 200 (application/json)

        + Body
        
            [
                {
                    "id": 4,
                    "nome_local": "Robertooo",
                    "nome_evento": "dasdasdas",
                    "detalhe": "123456789",
                    "foto": "dasdasdas3_7_2017.jpg",
                    "data_inicio": "2017-09-01T00:00:00.000Z",
                    "data_termino": "2017-09-02T00:00:00.000Z",
                    "preco": 12.5,
                    "link": "1235dsadasdsads64",
                    "createdAt": "2017-07-03T21:57:08.823Z",
                    "updatedAt": "2017-07-03T21:57:08.823Z",
                    "tipoEventoId": 1,
                    "usuarioId": 1,
                    "endereco": {
                        "id": 23,
                        "cep": "123456789",
                        "logradouro": "dddsadsadas",
                        "complemento": "das",
                        "bairro": "dsa",
                        "cidade": "Rio",
                        "estado": "das",
                        "numero": "asd",
                        "longitude": "-35.704802",
                        "latitude": "-9.645770",
                        "createdAt": "2017-07-03T21:57:08.990Z",
                        "updatedAt": "2017-07-03T21:57:08.990Z",
                        "usuarioId": null,
                        "eventoId": 4
                    },
                    "usuario": {
                        "id": 1,
                        "nome": "Robertooo",
                        "nome_responsavel": "dasdasdas",
                        "cnpj": "123456789",
                        "email": "rm@gmail.com",
                        "ativo": true,
                        "telefone": "123123213",
                        "createdAt": "2017-06-19T02:01:21.787Z",
                        "updatedAt": "2017-06-19T02:01:21.787Z"
                    },
                    "tipo_evento": {
                        "id": 1,
                        "nome": "Show2",
                        "createdAt": "2017-06-19T02:05:19.450Z",
                        "updatedAt": "2017-06-19T02:05:19.450Z"
                    }
                },
                {
                    "id": 3,
                    "nome_local": "Robertooo",
                    "nome_evento": "dasdasdas",
                    "detalhe": "123456789",
                    "foto": "dasdasdas1_7_2017.jpg",
                    "data_inicio": "2007-01-01T00:00:00.000Z",
                    "data_termino": "2007-02-02T00:00:00.000Z",
                    "preco": 12.5,
                    "link": "1235dsadasdsads64",
                    "createdAt": "2017-07-01T04:36:05.837Z",
                    "updatedAt": "2017-07-01T04:36:05.837Z",
                    "tipoEventoId": 1,
                    "usuarioId": 1,
                    "endereco": {
                        "id": 22,
                        "cep": "123456789",
                        "logradouro": "dddsadsadas",
                        "complemento": "das",
                        "bairro": "dsa",
                        "cidade": "Rio",
                        "estado": "das",
                        "numero": "asd",
                        "longitude": "-35.704802",
                        "latitude": "-9.645770",
                        "createdAt": "2017-07-01T04:36:05.864Z",
                        "updatedAt": "2017-07-01T04:36:05.864Z",
                        "usuarioId": null,
                        "eventoId": 3
                    },
                    "usuario": {
                        "id": 1,
                        "nome": "Robertooo",
                        "nome_responsavel": "dasdasdas",
                        "cnpj": "123456789",
                        "email": "rm@gmail.com",
                        "ativo": true,
                        "telefone": "123123213",
                        "createdAt": "2017-06-19T02:01:21.787Z",
                        "updatedAt": "2017-06-19T02:01:21.787Z"
                    },
                    "tipo_evento": {
                        "id": 1,
                        "nome": "Show2",
                        "createdAt": "2017-06-19T02:05:19.450Z",
                        "updatedAt": "2017-06-19T02:05:19.450Z"
                    }
                }
            ]

### Inserir Evento [POST] [/v1/web/evento] [PUT] [/v1/web/evento/:id]
+ Request (application/json)

        {
            "evento" : {
            "nome_local":"Robertooo",
            "nome_evento": "dasdasdas",
            "detalhe":"123456789",
            "foto" : BASE64,
            "data_inicio" :"2007-01-01",
            "data_termino" :"2007-02-02",
            "preco": 12.50,
            "link":"1235dsadasdsads64",
            "tipoEventoId" : 1,
            "usuarioId" : 1,
            "endereco" : {
                "cep":"123456789",
                "logradouro":"dddsadsadas",
                "complemento":"das",
                "bairro":"dsa",
                "cidade":"das",
                "estado":"das",
                "numero":"asd",
                "longitude":"asd",
                "latitude":"das"
                }
            }
        }

+ Response 201 (application/json)

        + Body
    
           {
                "id": 5,
                "nome_local": "Robertooo",
                "nome_evento": "dasdasdas",
                "detalhe": "123456789",
                "foto": "dasdasdas4_7_2017.jpg",
                "data_inicio": "2007-01-01T00:00:00.000Z",
                "data_termino": "2007-02-02T00:00:00.000Z",
                "preco": 12.5,
                "link": "1235dsadasdsads64",
                "tipoEventoId": 1,
                "usuarioId": 1,
                "endereco": {
                    "id": 24,
                    "cep": "123456789",
                    "logradouro": "dddsadsadas",
                    "complemento": "das",
                    "bairro": "dsa",
                    "cidade": "das",
                    "estado": "das",
                    "numero": "asd",
                    "longitude": "asd",
                    "latitude": "das",
                    "eventoId": 5,
                    "updatedAt": "2017-07-04T23:43:54.062Z",
                    "createdAt": "2017-07-04T23:43:54.062Z",
                    "usuarioId": null
                },
                "updatedAt": "2017-07-04T23:43:53.725Z",
                "createdAt": "2017-07-04T23:43:53.725Z"
            }


## Evento [APP] [/v1/app/evento]
### Get Evento [GET] [/v1/app/evento/id/:id/:origem(latitude,longitude)]  
    #### Exemplo url [host/v1/app/evento/id/4/-9.652532,-35.735195/]

+ Response 201 (application/json)

        + Body

            {
                "id": 4,
                "nome_local": "Robertooo",
                "nome_evento": "dasdasdas",
                "detalhe": "123456789",
                "foto": "dasdasdas3_7_2017.jpg",
                "data_inicio": "2017-09-01T00:00:00.000Z",
                "data_termino": "2017-09-02T00:00:00.000Z",
                "preco": 12.5,
                "link": "1235dsadasdsads64",
                "createdAt": "2017-07-03T21:57:08.823Z",
                "updatedAt": "2017-07-03T21:57:08.823Z",
                "tipoEventoId": 1,
                "usuarioId": 1,
                "endereco": {
                    "id": 23,
                    "cep": "123456789",
                    "logradouro": "dddsadsadas",
                    "complemento": "das",
                    "bairro": "dsa",
                    "cidade": "Rio",
                    "estado": "das",
                    "numero": "asd",
                    "longitude": "-35.704802",
                    "latitude": "-9.645770",
                    "createdAt": "2017-07-03T21:57:08.990Z",
                    "updatedAt": "2017-07-03T21:57:08.990Z",
                    "usuarioId": null,
                    "eventoId": 4
                },
                "usuario": {
                    "id": 1,
                    "nome": "Robertooo",
                    "nome_responsavel": "dasdasdas",
                    "cnpj": "123456789",
                    "email": "rm@gmail.com",
                    "ativo": true,
                    "telefone": "123123213",
                    "createdAt": "2017-06-19T02:01:21.787Z",
                    "updatedAt": "2017-06-19T02:01:21.787Z"
                },
                "tipo_evento": {
                    "id": 1,
                    "nome": "Show2",
                    "createdAt": "2017-06-19T02:05:19.450Z",
                    "updatedAt": "2017-06-19T02:05:19.450Z"
                },
                "distancia": "4.1 km"
            }

### Get Eventos [GET] [/v1/app/evento/:origem/:cidade]
    #### Exemplo url [host/v1/app/missa/-9.652532,-35.735195/Rio]

+ Response 201 (application/json)

        + Body

            [
                {
                    "id": 4,
                    "nome_local": "Robertooo",
                    "nome_evento": "dasdasdas",
                    "detalhe": "123456789",
                    "foto": "dasdasdas3_7_2017.jpg",
                    "data_inicio": "2017-09-01T00:00:00.000Z",
                    "data_termino": "2017-09-02T00:00:00.000Z",
                    "preco": 12.5,
                    "link": "1235dsadasdsads64",
                    "createdAt": "2017-07-03T21:57:08.823Z",
                    "updatedAt": "2017-07-03T21:57:08.823Z",
                    "tipoEventoId": 1,
                    "usuarioId": 1,
                    "endereco": {
                        "id": 23,
                        "cep": "123456789",
                        "logradouro": "dddsadsadas",
                        "complemento": "das",
                        "bairro": "dsa",
                        "cidade": "Rio",
                        "estado": "das",
                        "numero": "asd",
                        "longitude": "-35.704802",
                        "latitude": "-9.645770",
                        "createdAt": "2017-07-03T21:57:08.990Z",
                        "updatedAt": "2017-07-03T21:57:08.990Z",
                        "usuarioId": null,
                        "eventoId": 4
                    },
                    "usuario": {
                        "id": 1,
                        "nome": "Robertooo",
                        "nome_responsavel": "dasdasdas",
                        "cnpj": "123456789",
                        "email": "rm@gmail.com",
                        "ativo": true,
                        "telefone": "123123213",
                        "createdAt": "2017-06-19T02:01:21.787Z",
                        "updatedAt": "2017-06-19T02:01:21.787Z"
                    },
                    "tipo_evento": {
                        "id": 1,
                        "nome": "Show2",
                        "createdAt": "2017-06-19T02:05:19.450Z",
                        "updatedAt": "2017-06-19T02:05:19.450Z"
                    },
                    "distancia": "4.1 km"
                }
            ]

## Login [APP] [/v1/app/login]
### Login Facebook [POST] [/v1/app/login/facebook]  

+ Request (application/json)

        + Body

                { 
                    "usuario" : {
                        "facebookId" : "6",
                        "nome" : "Roberto",
                        "email" : "Email",
                        "foto" : "www.image.com/foto",
                    }
                }

+ Response 200 (application/json)

        + Body
        
            {
                "id": 4,
                "facebookId": "6",
                "nome": "Roberto",
                "email": "roberto@hotmail.com",
                "foto": "www.image.com/foto",
                "updatedAt": "2017-07-11T23:28:22.919Z",
                "createdAt": "2017-07-11T23:28:22.919Z",
                "googleId": null
            }

### Login Google [POST] [/v1/app/login/google]  

+ Request (application/json)

        + Body

                { 
                    "usuario" : {
                        "googleId" : "6",
                        "nome" : "Roberto",
                        "email" : "Email",
                        "foto" : "www.image.com/foto",
                    }
                }

+ Response 200 (application/json)

        + Body
        
            {
                "id": 5,
                "googleId": "6",
                "nome": "Roberto",
                "email": "roberto@hotmail.com",
                "foto": "www.image.com/foto",
                "updatedAt": "2017-07-11T23:31:00.351Z",
                "createdAt": "2017-07-11T23:31:00.351Z",
                "facebookId": null
            }

## Tipo Evento [WEB] [/v1/web/tipo-evento]
### Get Tipo Evento [GET]  [/v1/web/tipo-evento/:id]

+ Response 200 (application/json)

        + Body

            {
                "id": 1,
                "nome": "Show2",
                "createdAt": "2017-06-19T02:05:19.450Z",
                "updatedAt": "2017-06-19T02:05:19.450Z"
            }

### Get Tipo Evento [GET]  [/v1/web/tipo-evento]

+ Response 200 (application/json)

        + Body
        [
            {
                "id": 1,
                "nome": "Show2",
                "createdAt": "2017-06-19T02:05:19.450Z",
                "updatedAt": "2017-06-19T02:05:19.450Z"
            }
        ]

### Inserir Tipo Evento [POST] [/v1/web/tipo-evento] [PUT] [/v1/web/tipo-evento/:id]

+ Request (application/json)

        {
            "tipo_evento" : {
                "nome": "Missa"
            }
        }

+ Response 201 (application/json)

        + Body
    
           {
                "id": 2,
                "nome": "show3",
                "updatedAt": "2017-07-11T23:40:42.896Z",
                "createdAt": "2017-07-11T23:40:42.896Z"
            }

### Deletar Tipo Evento [DELETE] [/v1/web/tipo-evento/:id]

+ Response 201 (application/json)

## Login [WEB] [/v1/web/login]
### Get Login [GET]  [/v1/web/login/:id]

+ Response 200 (application/json)

        + Body

            {
                "id": 1,
                "nome": "Robertooo",
                "nome_responsavel": "dasdasdas",
                "cnpj": "123456789",
                "email": "rm@gmail.com",
                "ativo": true,
                "telefone": "123123213",
                "createdAt": "2017-06-19T02:01:21.787Z",
                "updatedAt": "2017-06-19T02:01:21.787Z"
            }

### Get Login [GET]  [/v1/web/login]

+ Response 200 (application/json)

        + Body
        [
            {
                "id": 1,
                "nome": "Robertooo",
                "nome_responsavel": "dasdasdas",
                "cnpj": "123456789",
                "email": "rm@gmail.com",
                "ativo": true,
                "telefone": "123123213",
                "createdAt": "2017-06-19T02:01:21.787Z",
                "updatedAt": "2017-06-19T02:01:21.787Z"
            }
        ]

### Fazer Login [POST] [/v1/web/login]

+ Request (application/json)

        {
            "usuario" : {
                "email" : "rm@gmal.com",
                "senha" : "123456"
            }
        }

+ Response 201 (application/json)

        + Body
    
           {
                "id": 1,
                "nome": "Robertooo",
                "nome_responsavel": "dasdasdas",
                "cnpj": "123456789",
                "email": "rm@gmail.com",
                "ativo": true,
                "telefone": "123123213",
                "createdAt": "2017-06-19T02:01:21.787Z",
                "updatedAt": "2017-06-19T02:01:21.787Z"
            }

## Favorito [App] [/v1/app/favorito]
### Get Favoritos [GET]  [/v1/app/favorito/:id]

+ Response 200 (application/json)

        + Body

            RETORNA TODOS OS FAVORITOS PEGANDO PELO ID O USUARIO

### POST Favorito [POST]  [/v1/app/favorito]

+ Response 200 (application/json)

        + Body
        
            {
                favorito : {
                    usuarioId : id, (id igreja)
                    usuarioAppId: id (idapp)
                }
            }

### Delete Favorito [DELETE] [/v1/app/favorito]

+ Request (application/json)

         {
                favorito : {
                    usuarioId : id, (id igreja)
                    usuarioAppId: id (idapp)
                }
            }





