const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bcrypt = require('bcrypt')

var uniqueValidator = require('mongoose-unique-validator')

const AppointmentSchema  = new Schema({ 
    
	appointmentDate: {
        type: Date , 
        required : [true,'Please provide appointment date']
    },
	doctorNote: {
        type: String , 
        required : [true,'Please provide doctor note']
    },
	totalCost: {
        type: String , 
        required : [true,'Please provide total cost']
    },
	medicineCost: {
        type: Number, 
        required : [true,'Please provide medicine cost'] 
    },
	patientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient"
    },
	doctorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor"
    },
	nurseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Nurse"
    }
},
{
  timestamps: true
});


const Appointment = mongoose.model('Appointment',AppointmentSchema);

module.exports = Appointment;