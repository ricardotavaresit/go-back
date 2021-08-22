const express = require("express");
const routes = require("./routes");
const cors = require("cors");

require("./database");

class App {
  constructor() {
    this.server = express();
    this.routes();
  }

  routes() {
    this.server.use(cors());
    this.server.use(express.json());

    this.server.use(routes);
  }


}

module.exports = new App().server;
