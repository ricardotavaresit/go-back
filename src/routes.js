const express = require("express");

const WeatherController = require("./controllers/WeatherController");
const LogController = require("./controllers/LogController");
const routes = express.Router();

routes.get("/weather/:id", WeatherController.index);
routes.get("/logs", LogController.index);
routes.post("/logs", LogController.store);

module.exports = routes;
