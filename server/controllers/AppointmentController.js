const Appointment = require("../models/appointment.js");

const getAppointments = async (req, res) => {
    try {
        let isTimeSlotAvailable = req.body.isSlotAvailable;
        let appointmentDate = req.body.appDate
        let appointments = [];
        if(isTimeSlotAvailable){
            appointments = await Appointment.find({'isTimeSlotAvailable':isTimeSlotAvailable});
        }else{
            appointments = await Appointment.find({});
        }
        res.json({ message: "success", 'appointments': appointments });
    } catch (error) {
        res.status(500).json({ errors: [error.message] });
    }
}

const createAppointmentSlot = async (req, res) => {
    try {
        let slot = req.body.slot;
        console.log(slot)
        const appointments = await Appointment.find({'appointmentDate':slot.appDate,'appointmentTime':slot.appTime});
        if(appointments.length>0){
            res.status(400).json({message:"error",errors:["Slot already exists"]})
        }
        else{
            let appointment = await Appointment.create({
                'appointmentDate':slot.appDate,
                'appointmentTime':slot.appTime
            });
            if(appointment){
                res.json({message: "success"});
            }
            else{
                res.status(404).json({ errors: ["Could not create slot. Please Try again."] });
            }
            
        }
    } catch (error) {
        res.status(404).json({ errors: [error.message] });
    }
}
const updateAppointment = async (req, res) => {
    // try {
    //     const user = await User.findById(req.params.id);
    //     res.json(user);
    // } catch (error) {
    //     res.status(404).json({ errors: [error.message] });
    // }
}
const deleteAppointment = async (req, res) => {
    // try {
    //     const user = await User.findById(req.params.id);
    //     res.json(user);
    // } catch (error) {
    //     res.status(404).json({ errors: [error.message] });
    // }
}
const getAppointmentById = async (req, res) => {
    // try {
    //     const user = await User.findById(req.params.id);
    //     res.json(user);
    // } catch (error) {
    //     res.status(404).json({ errors: [error.message] });
    // }
}


module.exports = {
    getAppointments,
    getAppointmentById,
    createAppointmentSlot,
    updateAppointment,
    deleteAppointment
}