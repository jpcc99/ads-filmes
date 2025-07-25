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
    try {
      const movie = await Movie.findAll({
        attributes: [`titulo`, `descricao`, `ano_lancamento`, `poster_url`, `genero`],
        where: {
          movie_id: id,
        },
      });
      if (movie.length === 0) {
        return res.status(404).send("Filme não encontrado");
      }
      res.status(200).json(movie[0]);
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
    const { titulo, descricao, ano_lancamento, poster_url, genero } = req.body;
    try {
      let movie = await Movie.findAll({
        where: {
          titulo: titulo,
        },
      });
      if (titulo.toLowerCase() === movie[0].titulo) {
        return res.status(400).send("Filme já cadastrado com esse título");
      }
      movie = await Movie.create({
        titulo,
        descricao,
        ano_lancamento,
        poster_url,
        genero,
      });
      return res.status(201).send(`Filme: ${titulo} criado com sucesso com id: ${movie.movie_id}`);
    } catch (err) {
      console.error(err);
      return res.status(500).send("Não foi possível cadastrar o filme");
    }
  }

    } catch (err) {
      console.error(err);
      return res.status(500).send("Não foi possível buscar o filme");
    }
  }
}

module.exports = MovieController;
