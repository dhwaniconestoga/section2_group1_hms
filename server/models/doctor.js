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
    required: [true, 'Please provide email'],
    unique: true
  },
  username: {
    type: String,
    required: [true, 'Please provide username'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide password'],
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
