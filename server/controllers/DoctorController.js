const Doctor = require("../models/doctor.js");
const User = require("../models/user.js");

const getDoctors = async (req, res) => {

    try {

        var name = req.query.name;

        let doctors = [];
        if (!name) {
            doctors = await Doctor.find({});
        } else {

            doctors = await Doctor.find({ $or: [{ "firstName": name }, { "lastName": name }] });
        }

        res.json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getDoctorById = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.id);
        res.json(doctor);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const isDoctorValid = (newdoctor) => {
    let errorList = [];
    if (!newdoctor.firstName) {
        errorList[errorList.length] = "Please enter first name";
    }
    if (!newdoctor.lastName) {
        errorList[errorList.length] = "Please enter last name";
    }
    if (!newdoctor.email) {
        errorList[errorList.length] = "Please enter email";
    }
    if (!newdoctor.password) {
        errorList[errorList.length] = "Please enter password";
    }
    if (!newdoctor.confirmPassword) {
        errorList[errorList.length] = "Please re-enter password in Confirm Password field";
    }
    if (!(newdoctor.password == newdoctor.confirmPassword)) {
        errorList[errorList.length] = "Password and Confirm Password did not match";
    }

    if (!newdoctor.specialist) {
        errorList[errorList.length] = "Please enter specialist";
    }


    if (errorList.length > 0) {
        result = {
            status: false,
            errors: errorList
        }
        return result;
    }
    else {
        return { status: true };
    }

}

const saveDoctor = async (req, res) => {
    let newdoctor = req.body;
    let doctorValidStatus = isDoctorValid(newdoctor);
    if (!doctorValidStatus.status) {
        res.status(400).json({
            message: 'error',
            errors: doctorValidStatus.errors
        });
    }
    else {
        const doctor = new Doctor(req.body);
        User.create(
            {
                email: doctor.email,
                username: doctor.username,
                firstName: doctor.firstName,
                lastName: doctor.lastName,
                password: doctor.password,
                userType: 'Doctor',
                activated: 1,
            },
            (error, userDetails) => {
                if (error) {
                    res.status(400).json({ message: "error", errors: [error.message] });
                } else {
                    doctor.userId = userDetails._id,
                    Doctor.create(doctor,
                        (error2, doctorDetails) => {
                            if (error2) {
                                User.deleteOne({ _id: userDetails });
                                res.status(400).json({ message: 'error', errors: [error2.message] });
                            } else {
                                res.status(201).json({ message: 'success' });
                            }
                        }
                    );


                }
            }
        );
        
    }
}

const updateDoctor = async (req, res) => {
    let newdoctor = req.body;
    let doctorValidStatus = isDoctorValid(newdoctor);
    if (!doctorValidStatus.status) {
        res.status(400).json({
            message: 'error',
            errors: doctorValidStatus.errors
        });
    }
    else {
        try {
            const updateddoctor = await Doctor.updateOne({ _id: req.params.id }, { $set: req.body });
            res.status(201).json({ message: 'success' });
        } catch (error) {
            res.status(400).json({ message: 'error', errors: [error.message] });
        }
    }
}

const deleteDoctor = async (req, res) => {
    try {
        const deleteddoctor = await Doctor.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteddoctor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getDoctors,
    getDoctorById,
    saveDoctor,
    updateDoctor,
    deleteDoctor
}