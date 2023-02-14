const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bcrypt = require('bcrypt')

var uniqueValidator = require('mongoose-unique-validator')

const PrescriptionSchema  = new Schema({ 
	appointmentId: {
	  type: mongoose.Schema.Types.ObjectId,
	  ref: "User"
	},
	medicineId: {
	  type: mongoose.Schema.Types.ObjectId,
	  ref: "User"
	},
    qty: {
        type: Number
    }
},
{
  timestamps: true
});


const Precription = mongoose.model('Precription',PrescriptionSchema);

module.exports = Precription;