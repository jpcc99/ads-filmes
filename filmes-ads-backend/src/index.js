const server = require("./server");
const morgan = require("morgan");
const port = 3001;

server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.status(200).send("Hello World");
})

server.listen(port, () => console.log(`Servidor ouvindo na porta ${port}`));
