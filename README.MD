FORMAT: 1A
HOST: http://localhost:8079/palato/

# AHoraDaMissa API

## Igreja [WEB] [/v1/web/igreja]
### Get Igreja [GET]  [/v1/web/igreja/:id]

+ Response 200 (application/json)

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

### Inserir Igreja [POST] [PUT] [/v1/web/igreja]

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
###