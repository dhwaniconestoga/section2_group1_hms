const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");

const DoctorSchema = new Schema({
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
  },
  hospitalId: {
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
  specialist: {
    type: String
  }
});

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;
