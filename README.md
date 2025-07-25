# ADS Filmes - Sistema de Gerenciamento de Filmes

Sistema para gerenciamento de filmes desenvolvido com ReactJS (Next.js) e Node.js.


## Estrutura do projeto

O projeto está divido em duas partes:

- frontend `ads-filmes/`
- backend `ads-filmes-backend/`


```txt
├── ads-filmes
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── src
│       └── app
|           ├── cadastro
|           │   └── page.js
|           ├── components
|           │   ├── FilmesLista.js
|           │   └── Navegacao.js
|           ├── editar/
|           ├── filme/
|           ├── filmes/
|           ├── globals.css
|           ├── layout.js
|           └── page.js
|
├── ads-filmes-backend
│   ├── package.json
│   ├── package-lock.json
│   └── src
│       ├── controllers
│       │   └── MovieController.js
│       ├── database
│       │   └── dbConfig.js
│       ├── index.js
│       ├── models
│       │   └── Movie.js
│       ├── routes
│       │   ├── index.js
│       │   └── movies.js
├── README.md
```

## Funcionalidades

- Cadastrar filmes
- Listar filmes  
- Ver detalhes dos filmes
- Editar filmes
- Excluir filmes
- Interface responsiva

## Tecnologias

### Frontend
- Next.js 15
- React 19
- React Hooks (useState, useEffect)
- CSS3

### Backend
- Node.js
- Express.js
- Sequelize
- SQLite

## Como Executar

### Backend

```bash
cd ads-filmes/ads-filmes-backend
npm install
npm run dev
```

Backend rodará em: http://localhost:3001

### Frontend

```bash
cd ads-filmes/ads-filmes
npm install

# Para rodar no modo desenvolvimento
npm run dev

# Para produção
npm run build 
npm start

```

Frontend rodará em: http://localhost:3000

## API Endpoints

| Método | Endpoint | Descrição |
|:---|:---|:---|
| GET | `/movies` | Listar filmes |
| GET | `/movies/:id` | Buscar filme por ID |
| POST | `/movies` | Cadastrar filme |
| PUT | `/movies/:id` | Atualizar filme |
| DELETE | `/movies/:id` | Excluir filme |


## Licença

[MIT](https://choosealicense.com/licenses/mit/)
