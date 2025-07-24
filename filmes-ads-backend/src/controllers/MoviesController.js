/**
 * Lista todos os filmes
 * @param{import('express').Request} req
 * @param{import('express').Response} res
*/
module.exports.listar = function(req, res) {
  const movies = ["lista", "de", "filmes"];
  return res.status(200).json(movies);
}
