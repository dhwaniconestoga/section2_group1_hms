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
    required : [true,'Please provide email'],
    unique:true
  },
  username: {
      type: String , 
      required : [true,'Please provide username'],
      unique:true
  },
  password: {
      type: String , 
      required : [true,'Please provide password'],
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
