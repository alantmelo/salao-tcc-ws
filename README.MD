FORMAT: 1A
HOST: http://localhost:3000/

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
### Get Igreja [GET] [/v1/app/igreja/id/:id/:origem(latitude,longitude)]  
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