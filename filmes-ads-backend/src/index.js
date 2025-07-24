const server = require("./server");
const port = 3001;

server.get("/", (req, res) => {
  res.status(200).send("Hello World");
})

server.listen(port, () => console.log(`Servidor ouvindo na porta ${port}`));
