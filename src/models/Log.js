const mongoose = require("mongoose");

const LogSchema = new mongoose.Schema(
  {
    cities: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Log", LogSchema);
