const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");

const DoctorSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  email: {
    type: String,
    unique: true
  },
  username: {
    type: String,
    unique: true
  },
  password: {
    type: String,
  },
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  phone: {
    type: String
  },
  specialist: {
    type: String
  },
  address: {
    type: String
  }
});

//hashing password
DoctorSchema.pre('save', function (next) {
  const doctor = this

  bcrypt.hash(doctor.password, 10, (error, hash) => {
    doctor.password = hash
    next()
  })
})

const Doctor = mongoose.model("Doctor", DoctorSchema);

module.exports = Doctor;
