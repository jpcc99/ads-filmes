const { Model, DataTypes } = require("sequelize");
const Db = require("../database/dbConfig");

class Movie extends Model { }
Movie.init({
  movie_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "O título do filme não pode estar vazio"
      },
      len: {
        args: [2, 100],
        msg: "O título deve ter entre 2 e 100 caracteres"
      }
    },
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "A descrição não pode estar vazia"
      },
      len: {
        args: [10, 2000],
        msg: "A descrição deve ter entre 10 e 2000 caracteres"
      }
    }
  },
  ano_lancamento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isDate: {
        msg: "Data de lançamento inválida"
      },
      isBefore: {
        args: new Date().toISOString().split('T')[0],
        msg: "A data de lançamento não poderá ser no futuro"
      },
      isAfter: {
        args: '1888-01-01', // A data do primero filme da história
        msg: "A data de lançamento deve ser após 1888"
      }
    }
  },
  poster_url: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: {
        msg: "URL do poster inválida"
      },
      notEmpty: {
        msg: "A URL do poster não pode estar vazia"
      }
    }
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "O gênero não pode estar vazio"
      },
      isIn: {
        args: [['Ação', 'Aventura', 'Comédia', 'Drama', 'Ficção Científica', 'Terror', 'Romance',
          'Animação', 'Documentário', 'Fantasia', 'Suspense', 'Crime', 'Mistério']],
        msg: "Gênero inválido"
      }
    }
  }
}, { sequelize: Db.sequelize, tableName: "Movie" },
);

module.exports = Movie;
