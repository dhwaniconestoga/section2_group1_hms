const Patient = require("../models/patient.js");

const getPatients = async (req, res) => {
    
    try {
    
        var name = req.query.name;
        
        let patients = [];
        if(!name){
            patients = await Patient.find({});
        }else{
           
            patients = await Patient.find({$or:[{"firstName":name},{"lastName":name}]});
        }
        
        res.json(patients);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getPatientById = async (req, res) => {
    try {
        const patient = await Patient.findById(req.params.id);
        res.json(patient);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const isPatientValid = (newPatient) => {
    let errorList = [];
    if (!newPatient.firstName) {
        errorList[errorList.length] = "Please enter first name";
    }
    if (!newPatient.lastName) {
        errorList[errorList.length] = "Please enter last name";
    }
    if (!newPatient.email) {
        errorList[errorList.length] = "Please enter email";
    }
    if (!newPatient.password) {
        errorList[errorList.length] = "Please enter password";
    }
    if (!newPatient.confirmPassword) {
        errorList[errorList.length] = "Please re-enter password in Confirm Password field";
    }
    if (!(newPatient.password == newPatient.confirmPassword)) {
        errorList[errorList.length] = "Password and Confirm Password did not match";
    }
    
    if (!newPatient.address) {
        errorList[errorList.length] = "Please enter address";
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

const savePatient = async (req, res) => {
    let newPatient = req.body;
    let PatientValidStatus = isPatientValid(newPatient);
    if (!PatientValidStatus.status) {
        res.status(400).json({
            message: 'error',
            errors: PatientValidStatus.errors
        });
    }
    else {
        const patient = new Patient(req.body);
        try {
            const insertedPatient = await patient.save();
            res.status(201).json({ message: 'success' });
        } catch (error) {
            res.status(400).json({ message: 'error', errors: [error.message] });
        }
    }
}

const updatePatient = async (req, res) => {
    let newPatient = req.body;
    let PatientValidStatus = isPatientValid(newPatient);
    if (!PatientValidStatus.status) {
        res.status(400).json({
            message: 'error',
            errors: PatientValidStatus.errors
        });
    }
    else {
        try {
            const updatedPatient = await Patient.updateOne({ _id: req.params.id }, { $set: req.body });
            res.status(201).json({ message: 'success' });
        } catch (error) {
            res.status(400).json({ message: 'error', errors: [error.message] });
        }
    }
}

const deletePatient = async (req, res) => {
    try {
        const deletedPatient = await Patient.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedPatient);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getPatients,
    getPatientById,
    savePatient,
    updatePatient,
    deletePatient
}