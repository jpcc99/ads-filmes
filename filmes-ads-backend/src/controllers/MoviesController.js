/**
 * Lista todos os filmes
 * @param{import('express').Request} req
 * @param{import('express').Response} res
*/
module.exports.listar = function(_req, res) {
  const movies = ["lista", "de", "filmes"];
  return res.status(200).json(movies);
}

/**
 * Getter de detalhes de um dado filme. 
 * @param{import('express').Request} req
 * @param{import('express').Response} res
*/
module.exports.getDetailsById = function(req, res) {
  const { id } = req.params;

  console.log("movie_id: " + id);
  return res.status(404).send("Busca ainda não disponível");
}
