const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bcrypt = require('bcrypt')

var uniqueValidator = require('mongoose-unique-validator')

const AppointmentSchema  = new Schema({ 
    
	appointmentDate: {
        type: Date , 
        required : [true,'Please provide appointment date']
    },
	appointmentTime: {
        type: Time , 
        required : [true,'Please provide appointment time']
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
    }
},
{
  timestamps: true
});


const Appointment = mongoose.model('Appointment',AppointmentSchema);

module.exports = Appointment;