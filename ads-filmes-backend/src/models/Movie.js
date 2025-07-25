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
    get() {
      const rawValue = this.getDataValue("titulo");
      return rawValue ? rawValue.toLowerCase() : null;
    }
  },
  descricao: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  ano_lancamento: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  poster_url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, { sequelize: Db.sequelize, tableName: "Movie" },
);

module.exports = Movie;
