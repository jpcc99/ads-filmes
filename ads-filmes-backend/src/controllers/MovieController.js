const Movie = require("../models/Movie");

class MovieController {
  /**
   * @param {import ("express").Request} req
   * @param {import ("express").Response} res
  */
  static async list(_req, res) {
    try {
      const movies = await Movie.findAll({
        attributes: [`movie_id`, `titulo`, `poster_url`, `genero`],
        order: ["titulo"],
      });
      if (movies.length === 0) {
        return res.status(404).json({ message: "Filmes não encontrados" });
      }
      return res.status(200).json(movies);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Não foi possível listar os filmes" });
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
        return res.status(404).json({ message: "Filme não encontrado" });
      }
      res.status(200).json(movie[0]);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Não foi possível buscar o filme" });
    }
  }

  /**
   * @param {import ("express").Request} req
   * @param {import ("express").Response} res
  */
  static async create(req, res) {
    const { titulo, descricao, ano_lancamento, poster_url, genero } = req.body;
    try {
      let movie = await Movie.findAll({
        where: {
          titulo: titulo,
        },
      });
      if (movie.length !== 0) {
        return res.status(400).json({ message: "Filme já cadastrado com esse título" });
      }
      movie = await Movie.create({
        titulo,
        descricao,
        ano_lancamento,
        poster_url,
        genero,
      });
      return res.status(201).json({ message: `Filme: ${titulo} criado com sucesso com id: ${movie.movie_id}` });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Não foi possível cadastrar o filme" });
    }
  }

  /**
   * @param {import ("express").Request} req
   * @param {import ("express").Response} res
  */
  static async update(req, res) {
    const { id } = req.params;
    const dataToUpdate = req.body;

    if (!dataToUpdate || Object.keys(dataToUpdate).length === 0) {
      return res.status(400).json({ message: "Nada para atualizar" });
    }

    try {
      const [_affectedCount, affectedRows] = await Movie.update(dataToUpdate, {
        where: {
          movie_id: id,
        },
        returning: true,
      });
      if (affectedRows === 0) {
        return res.status(404).json({ message: "Filime não encontrado" });
      }
      return res.status(200).json({
        message: "Filme foi atualizado", data: await Movie.findByPk(id, {
          attributes: [`movie_id`, `titulo`, `descricao`, `ano_lancamento`, `poster_url`, `genero`],
        })
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Não foi possível atualizar o filme" });
    }
  }

  /**
   * @param {import ("express").Request} req
   * @param {import ("express").Response} res
  */
  static async remove(req, res) {
    const { id } = req.params;
    try {
      const affectedCount = await Movie.destroy({
        where: {
          movie_id: id,
        },
      });
      if (affectedCount < 1) {
        return res.status(404).json({ message: "Filme não encontrado" });
      }
      return res.status(200).json({ message: "Filme foi removido" });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: "Não foi possível remover o filme" });
    }
  }
}

module.exports = MovieController;
