const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bcrypt = require('bcrypt')

var uniqueValidator = require('mongoose-unique-validator')

const UserSchema  = new Schema({ 
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
    activated:{
        type: Boolean,
        default: false
    },
    verificationToken:{
        token: { type: String },
        expires: { type: Date }
    },
    firstName: {
        type: String , 
        required : [true,'Please provide first name'],
    },
    lastName: {
        type: String , 
        required : [true,'Please provide last name'],
    },
    phone: {
        type: String 
    },
    userType: {
        type: String , 
        required : true,
        enum : ['Admin','Patient','Doctor','Nurse'],
    }
},
{
  timestamps: true
});

UserSchema.plugin(uniqueValidator, { message: '{PATH} must be unique' })

//hashing password
UserSchema.pre('save', function(next){
    const user = this

    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})

const User = mongoose.model('User',UserSchema);

module.exports = User;