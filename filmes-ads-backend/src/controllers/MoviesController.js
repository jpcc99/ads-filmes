const checkMissingFields = require("../utils/checkMissingFields");

/**
 * Lista todos os filmes
 * @param{import('express').Request} req
 * @param{import('express').Response} res
*/
module.exports.list = function(_req, res) {
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

/**
 * Cria novo filme. 
 * @param{import('express').Request} req
 * @param{import('express').Response} res
*/
module.exports.create = function(req, res) {
  const missingFieldsResult = checkMissingFields(["titulo", "descricao", "ano_lancamento", "genero", "poster_url"], req.body);

  if (missingFieldsResult.error) {
    console.error(missingFieldsResult.message);
    return res.status(400).send("Não foi possível cadastrar novo filme");
  }

  const { titulo, descricao, ano_lancamento, genero, poster_url } = req.body;

  return res.status(404).send("Cadastro de filmes ainda não disponível");
}
