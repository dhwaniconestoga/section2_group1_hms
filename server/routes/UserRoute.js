const express = require("express");
const router = express.Router();

const  { 
    getUsers, 
    getUserById,
    saveUser,
    updateUser,
    deleteUser
} = require('../controllers/UserController.js')
 

 
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
 
module.exports = router