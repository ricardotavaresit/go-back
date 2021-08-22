const api = require("../services/api");
const utils = require("../utils/utils");

class WeatherController {
  async index(req, res) {
    const list_regions = req.params.id;
    const list_regions_ids = list_regions.split(",");
    const list_regions_ids_int = list_regions_ids.map(Number);
    const list_length = list_regions_ids_int.length;
    const data = [];

    if (list_length) {
      for (let i = 0; i < list_length; i++) {
        try {
          const response = await api.get(
            `https://api.ipma.pt/open-data/forecast/meteorology/cities/daily/${list_regions_ids_int[i]}`
          );

          let todayData = response.data.data[0];
          const regioDescription = utils.getDescById(list_regions_ids_int[i]);

          data.push({ data: todayData, local: regioDescription });
        } catch (error) {
          console.error(error);
        }
      }
      return res.status(200).json(data);
    } else {
      return res.status(400).json({ error: "Regions not found!" });
    }
  }
}

module.exports = new WeatherController();
