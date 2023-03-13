const express = require("express");
const router = express.Router();
const adminAuth = require('./middlewares/adminAuth');

const  { 
    getUserCountByRole
} = require('../controllers/AdminDashController.js')
 

 
router.post('/getUserCount',adminAuth,getUserCountByRole);

 
module.exports = router