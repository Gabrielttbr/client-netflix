# Clone netflix

Olá, esse projeto uma simples réplica da netflix em React, com sistema de login e registro de usuário, possuindo uma página home acessada quando o usuário está logado em sua conta. Essa página vai possuir um banner, series e filmes, todos sendo buscado da API REST , desenvolvida com express, utilizando como banco de dados o MYSQL.


### - Tela de login
![Página de login](./front-end/src/assets/readme/login.png)
### - Tela de Cadastro de usuário
![Página de registro](./front-end/src/assets/readme/registro.png)
### - Tela de home
![Página de registro](./front-end/src/assets/readme/home.png)
### - Tela index
![Página de registro](./front-end/src/assets/readme/index.png)

## Como rodar o front-end?

Você precisa ter o [Node](https://nodejs.org/en/), o [Git](https://git-scm.com/) e algum gerenciador de pacotes([NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm/) | [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)) instalados em sua máquina.

```bash
1. Clone o repositório:
$ git clone https://github.com/Gabrielttbr/client-netflix.git

2. Acesse a pasta e instale as dependências via terminal:
$ yarn / npm install

3. Inicie a aplicação em modo de desenvolvimento:
$ yarn start / npm run start

4. O servidor será aberto em http://localhost:3000
```
Após realizar esse passo a passo o seu front-end Estara configurado.Agora vamos configurar o back-end

## Back-end

Essa API REST foi feita com a biblioteca Express, utilizando o MYSQL como banco de dados. Vai possuir um sistema de login e registro, a senha e criptografada. Quando o usuário logar vai gerar um JWT, para conseguir fazer as requisições do Banner, Filme, Series, que são protegidas, ou seja, precisa ser passar JWT válido para fazer.

## ROTAS

1. http://localhost:3000/user
    * POST   http://localhost:3000/user/register
        ~~~javascript
        {
            nome: "",
            email: "",
            senha: "",
            cpf: "",
            cep: "",
            endereco: ""
        }
        ~~~
    * POST   http://localhost:3000/user/login
     ~~~javascript
        {
            email: "",
            senha: "",
        }
    ~~~
2. http://localhost:3000/filme
    * GET    http://localhost:3000/filme/
    * GET    http://localhost:3000/filme/:id
    * POST   http://localhost:3000/filme/
       ~~~javascript
        {
            titulo: "",
            descricao: "",
            imagem: ""
        }
      ~~~
    * PATCH  http://localhost:3000/filme/
      ~~~javascript
        {
            id: 0
            titulo: "",
            descricao: "",
            imagem: ""
        }
      ~~~
    * DELETE http://localhost:3000/filme/
       ~~~javascript
        {
            id: 0
        }
      ~~~
3. http://localhost:3000/banner
    * GET    http://localhost:3000/banner/
    * GET    http://localhost:3000/banner/:id
    * POST   http://localhost:3000/banner/
         ~~~javascript
        {
            titulo: '',
            descricao: '',
            imagem: '',
            status: 1 || 0
        }
      ~~~
    * PATCH  http://localhost:3000/banner/
         ~~~javascript
        {
            id: 0,
            titulo: '',
            descricao: '',
            imagem: '',
            status: 1 || 0
        }
      ~~~
      DELETE  http://localhost:3000/banner/
            ~~~javascript
        {
            id: 0,
      
        }
      ~~~
    
4. http://localhost:3000/serie
    * GET    http://localhost:3000/serie/
    * GET    http://localhost:3000/serie/:id
    * POST   http://localhost:3000/serie/
          ~~~javascript
        {
            titulo: '',
            descricao: '',
            imagem: '',
        }
      ~~~
    * PATCH  http://localhost:3000/serie/
    ~~~javascript
        {
            id: 0
            titulo: '',
            descricao: '',
            imagem: '',
        }
      ~~~
    * DELETE http://localhost:3000/serie/:id


Essas são as rotas disponíveis na minha API, lembrando que para acessar as rotas: serie, filme e banner, e necessário fazer o login e enviar o JWT, pelo hearders.

## Como rodar?

Você vai precisar ter o  [Docker](https://docs.docker.com/get-docker/), e o [Git](https://git-scm.com/) instalados em sua máquina

```bash
    1. Clone o repositório:
    
    $ git clone https://github.com/Gabrielttbr/api-netflix.git

    2. Acessa a pasta raiz, execute

    $ docker-compose up --build

    4. O servidor será aberto em http://localhost:3000
```

Pronto, com docker instalado em sua máquina, fica muito mais simples configurar o ambiente, agora sua aplicação já vai estar com o mysql configurado, e com database criado, tudo isso rodando em containes.



