const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const bcrypt = require('bcrypt')

var uniqueValidator = require('mongoose-unique-validator')

const UserSchema  = new Schema({ 
    username: {
        type: String , 
        required : [true,'Please provide username'],
        unique:true
    },
    password: {
        type: String , 
        required : [true,'Please provide password'],
    },
    user_type: {
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