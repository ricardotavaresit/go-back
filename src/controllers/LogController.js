const api = require("../services/api");
const utils = require("../utils/utils");

const Log = require("./../models/Log");

class LogController {
  async index(req, res) {
 

    const logs = await Log.find().sort("createdAt");

    return res.status(200).json(logs);

    /*
  
      return res.status(200).json(data);
    } else {
      return res.status(400).json({ error: "Regions not found!" });
    }
    */
  }

  async store(req, res) {
    const { cities } = req.body;

    const log = await Log.create({ cities });
    console.log(cities);

    return res.status(200).json(log);
  }
}

module.exports = new LogController();
