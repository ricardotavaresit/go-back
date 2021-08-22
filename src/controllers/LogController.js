const api = require("../services/api");
const utils = require("../utils/utils");

const Log = require("./../models/Log");

class LogController {
  async index(req, res) {
    const logs = await Log.find().sort("createdAt");

    if (logs) {
      return res.status(200).json(logs);
    } else {
      return res.status(400).json({ error: "Logs not found!" });
    }
  }

  async store(req, res) {
    const { cities } = req.body;

    const log = await Log.create({ cities });
    //console.log(cities);

    return res.status(200).json(log);
  }
}

module.exports = new LogController();
