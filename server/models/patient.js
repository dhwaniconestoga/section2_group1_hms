const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const PatientSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  accountType: String,
  first_name: {
    type: String,
    default: "defualt"
  },
  last_name: {
    type: String,
    default: "defualt"
  },
  date_of_birth: {
    type: String,
    default: "defualt"
  }
});

PatientSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash;
    next();
  });
});

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
