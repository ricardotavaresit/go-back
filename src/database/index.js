const mongoose = require("mongoose");

const Log = require("./../models/Log");

const models = [Log];

class Database {
  constructor() {
    console.log("Passei aqui");
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

/*   useFindAndModify: true,
, */
module.exports = new Database();
