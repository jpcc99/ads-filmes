const express = require("express");
const morgan = require("morgan");

const routes = require("./routes/");
const Db = require("./database/dbConfig");

const server = express();
const port = 3001;

// Middleware CORS para permitir requisições do frontend
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  
  // Responder para requisições OPTIONS (preflight)
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

server.use(express.json());
server.use(morgan("dev"));
server.use(routes);

Db.authenticate().then(() => {
  Db.sync().then(() => {
    server.listen(port, () => {
      console.log(`Servidor ouvindo na porta ${port}`);
    });
  }).catch((err) => {
    console.error(`Sincronização do banco de dados falhou: ${err}`);
  });
}).catch((err) => {
  console.error(`Conexão com o banco de dados falhou: ${err}`);
});
