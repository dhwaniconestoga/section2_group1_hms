const User = require("../../models/user");
const Doctor = require("../../models/doctor");
const Patient = require("../../models/patient");

const isUserValid = (newUser) =>{
    let errorList = [];
    if(!newUser.firstName){
        errorList[errorList.length] = "Please enter first name";
    }
    if(!newUser.lastName){
        errorList[errorList.length] = "Please enter last name";
    }
    if(!newUser.email){
        errorList[errorList.length] = "Please enter email";
    }
    if(!newUser.password){
        errorList[errorList.length] = "Please enter password";
    }
    if(!newUser.confirmPassword){
        errorList[errorList.length] = "Please re-enter password in Confirm Password field";
    }
    if(!newUser.userType){
        errorList[errorList.length] = "Please enter User Type";
    }
    if(!(newUser.password == newUser.confirmPassword)){
        errorList[errorList.length] = "Password and Confirm Password did not match";
    }

    if(errorList.length>0){
        result = {
            status:false,
            errors: errorList
        }
        return result;
    }
    else {
        return {status:true};
    }
    
}

module.exports =  (req,res) => {
    let newUser = req.body;
    
    let userValidStatus =  isUserValid(newUser);
    if(!userValidStatus.status){
        res.json({
            message: 'error',
            errors: userValidStatus.errors
        })
    }
    else{
        //write code for adding user to db
        User.create({
            email: newUser.email,
            password:  newUser.password,
            user_type: newUser.userType
        },(error,userDetails)=>{
            if(error){
                res.json({
                    message: 'error',
                    errors: [error.message]
                })
            }
            else{
                if(newUser.userType == "Doctor"){
                    Doctor.create({
                        userId: userDetails._id,
                        first_name: newUser.firstName,
                        last_name: newUser.lastName
                    },(error2,doctorDetails)=>{
                        if(error2){
                            User.deleteOne({_id: userDetails});
                            res.json({
                                message: 'error',
                                errors: [error.message]
                            })
                        }
                        else{
                            res.json({
                                message: 'success'
                            })
                        }
                    }) 
                }
                if(newUser.userType == "Patient"){
                    Patient.create({
                        userId: userDetails._id,
                        first_name: newUser.firstName,
                        last_name: newUser.lastName
                    },(error2,patientDetails)=>{
                        if(error2){
                            User.deleteOne({_id: userDetails});
                            res.json({
                                message: 'error',
                                errors: [error.message]
                            })
                        }
                        else{
                            res.json({
                                message: 'success'
                            })
                        }
                    }) 
                }
            }
        })
    }


    // if(!true){
    //     console.log(req.body)
    //     res.json({
    //         message: 'success',
    //         request: req.body
    //     })
    // }
    // else {
    //     console.log("error signing up ")
    //     res.json({
    //         message: 'error',
    //         errors: [
    //             "error1",
    //             "error2"
    //         ]
    //     })
    // }
    
}