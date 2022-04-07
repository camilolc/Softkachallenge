const express = require("express");
const cors = require("cors");
const { dbConnection } = require("../database/config");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.productsPath = "/api/questions";
    this.recordPath = "/api/score";
    this.connectDb();
    this.middleares();
    this.routes();
  }

  middleares() {
    //CORS
    this.app.use(cors());
    //SETTING JSON
    this.app.use(express.json());
    //PUBLIC PATH
    this.app.use(express.static("public"));
  }

  async connectDb() {
    await dbConnection();
  }

  routes() {
    this.app.use(this.productsPath, require("../routes/question.route"));
    this.app.use(this.recordPath, require("../routes/score.route"));
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Conneted in port: ${this.port}`);
    });
  }
}

module.exports = Server;
