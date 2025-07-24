const server = require("./server");
const port = 3001;

server.listen(port, () => console.log(`Servidor ouvindo na porta ${port}`));
