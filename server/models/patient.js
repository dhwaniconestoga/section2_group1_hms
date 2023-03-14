const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bcrypt = require("bcrypt");

const PatientSchema = new Schema({
  userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
  },
  email: {
    type: String , 
    unique:true
  },
  username: {
      type: String , 
      unique:true
  },
  password: {
      type: String
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
  address: {
    type: String
  }
});

//hashing password
PatientSchema.pre('save', function(next){
  const patient = this

  bcrypt.hash(patient.password, 10, (error, hash) => {
    patient.password = hash
      next()
  })
})


const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
