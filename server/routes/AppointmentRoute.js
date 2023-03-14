const express = require("express");
const router = express.Router();
const adminAuth = require('./middlewares/adminAuth');


const {
    getAppointments,
    getAppointmentById,
    createAppointmentSlot,
    updateAppointment,
    deleteAppointment
} = require('../controllers/AppointmentController.js')



router.post('/appointments', adminAuth, getAppointments);
router.get('/appointments/:id', adminAuth, getAppointmentById);
router.post('/appointments/add', adminAuth, createAppointmentSlot);
router.patch('/appointments/:id', adminAuth, updateAppointment);
router.delete('/appointments/:id', adminAuth, deleteAppointment);

module.exports = router