const path = require("path");
const { Sequelize } = require("sequelize");

class Db {
  static sequelize = new Sequelize({
    dialect: "sqlite",
    storage: path.join(__dirname, "ads-filmes-db.sqlite"),
  });

  static async authenticate() {
    return this.sequelize.authenticate();
  }

  static async sync() {
    await this.sequelize.sync();
  }
}

module.exports = Db;
