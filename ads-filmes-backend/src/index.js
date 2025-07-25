const express = require("express");
const morgan = require("morgan");

const routes = require("./routes/");
const Db = require("./database/dbConfig");

const server = express();
const port = 3001;

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
