const mongoose = require("mongoose");

const Log = require("./../models/Log");

const models = [Log];

class Database {
  constructor() {
    this.mongo();
  }

  mongo() {
    this.mongoConnection = mongoose.connect(
      "mongodb+srv://go:12345@cluster0.y7bka.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }
}

module.exports = new Database();