const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");

const NurseSchema = new Schema({
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
  },
  first_name: {
    type: String
  },
  last_name: {
    type: String
  },
  mobile: {
    type: String
  },
  address: {
    type: String
  }
});

const Nurse = mongoose.model("Nurse", NurseSchema);

module.exports = Nurse;
