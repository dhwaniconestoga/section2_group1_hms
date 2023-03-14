const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");

const PatientSchema = new Schema({
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  mobile: {
    type: String
  },
  address: {
    type: String
  }
});

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
