const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");

const HospitalSchema = new Schema({
  name: {
    type: String
  },
  location: {
    type: String
  },
  address: {
    type: String
  }
});

const Hospital = mongoose.model("Hospital", HospitalSchema);

module.exports = Hospital;
