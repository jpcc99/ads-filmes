const Movie = require("../models/Movie");
const getMissingFields = require("../util/checkForMissingFields");

class MovieController {
  /**
   * @param {import ("express").Request} req
   * @param {import ("express").Response} res
  */
  static async list(_req, res) {
    try {
      const movies = await Movie.findAll({
        order: ["titulo"],
      });
      if (movies.length === 0) {
        return res.status(404).send("Filmes não encontrados");
      }
      return res.status(200).json(movies);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Não foi possível listar os filmes");
    }
  }

  /**
   * @param {import ("express").Request} req
   * @param {import ("express").Response} res
  */
  static async getMovieById(req, res) {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("Id inválido");
    }
    try {
      const movie = await Movie.findAll({
        where: {
          movie_id: id,
        },
      });
      if (movie.length === 0) {
        return res.status(404).send("Filme não encontrado");
      }
    } catch (err) {
      console.error(err);
      return res.status(500).send("Não foi possível buscar o filme");
    }
  }

  /**
   * @param {import ("express").Request} req
   * @param {import ("express").Response} res
  */
  static async create(req, res) {
    const missingFields = await getMissingFields([`titulo`, `descricao`, `ano_lancamento`, `poster_url`, `genero`], req.body);
    if (missingFields.length > 0) {
      return res.status(400).send(`Não é possível criar o filme sem ${missingFields}`);
    }
    try {

      return res.status(501).send("Não implementado");
    } catch (err) {
      console.error(err);
      return res.status(500).send("Não foi possível buscar o filme");
    }
  }
}

module.exports = MovieController;
