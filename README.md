# Ads-Filmes

Um projeto para a cadeira de Web II. 

## Estrutura do projeto

O projeto está divido em duas partes:

- frontend `ads-filmes/`
- backend `ads-filmes-backend/`


```txt
├── ads-filmes/
│   ├── eslint.config.mjs
│   ├── jsconfig.json
│   ├── next.config.mjs
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── public/
│   ├── README.md
│   └── src/
├── ads-filmes-backend/
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   └── src/
├── CRUD - Filmes (1).pdf
└── README.md
```

## Dependências

Para podermos rodar o projeto precisamos das seguintes dependências:

- NodeJs >= v24.3.0

### Dependências para o frontend

- React

### Dependências para o backend

- express   5.1.0
- morgan    1.10.1
- sequelize 6.37.7
- sqlite3   5.1.7
- nodemon   3.1.10

## Instalação

Use o node package manager [npm](https://docs.npmjs.com/about-npm) para instalar as dependências necessárias de cada parte do projeto, ou seja,
na pasta do frontend e do backend

```bash
cd ads-filmes-backend
npm install 
```


```bash
cd ads-filmes
npm install
```


## Como rodar

Como o projeto está divido entre backend e frontend, devemos usar o comando abaixo em cada pasta para iniciar os programas de cada um deles

```bash
npm run dev
```

## Licença

[MIT](https://choosealicense.com/licenses/mit/)
