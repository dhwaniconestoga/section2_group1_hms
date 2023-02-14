const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bcrypt = require('bcrypt')

var uniqueValidator = require('mongoose-unique-validator')

const MedicineSchema  = new Schema({ 
    company: {
        type: String , 
        required : [true,'Please provide company']
    },
	description: {
        type: String , 
        required : [true,'Please provide description']
    },
	medicineDose: {
        type: String , 
        required : [true,'Please provide medicine dose']
    },
	medicineType: {
        type: String, 
        required : [true,'Please provide medicine type'] 
    },
	medicineCost: {
        type: Number, 
        required : [true,'Please provide medicine cost'] 
    },
	appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appointment"
      }
    ]
},
{
  timestamps: true
});


const Medicine = mongoose.model('Medicine',MedicineSchema);

module.exports = Medicine;