const User = require("../models/user.js");

const getUsers = async (req, res) => {
    
    try {
        var role = req.query.role;
        //console.log(role);
        let users = [];
        if(!role){
            users = await User.find({});
        }else{
            users = await User.find({"userType":role});
        }
        
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


const isUserValid = (newUser) => {
    let errorList = [];
    if (!newUser.firstName) {
        errorList[errorList.length] = "Please enter first name";
    }
    if (!newUser.lastName) {
        errorList[errorList.length] = "Please enter last name";
    }
    if (!newUser.email) {
        errorList[errorList.length] = "Please enter email";
    }
    if (!newUser.password) {
        errorList[errorList.length] = "Please enter password";
    }
    if (!newUser.confirmPassword) {
        errorList[errorList.length] = "Please re-enter password in Confirm Password field";
    }
    if (!newUser.userType) {
        errorList[errorList.length] = "Please enter User Type";
    }
    if (!(newUser.password == newUser.confirmPassword)) {
        errorList[errorList.length] = "Password and Confirm Password did not match";
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

const saveUser = async (req, res) => {
    let newUser = req.body;
    let userValidStatus = isUserValid(newUser);
    if (!userValidStatus.status) {
        res.status(400).json({
            message: 'error',
            errors: userValidStatus.errors
        });
    }
    else {
        const user = new User(req.body);
        try {
            const inserteduser = await user.save();
            res.status(201).json({ message: 'success' });
        } catch (error) {
            res.status(400).json({ message: 'error', errors: [error.message] });
        }
    }
}

const updateUser = async (req, res) => {
    let newUser = req.body;
    let userValidStatus = isUserValid(newUser);
    if (!userValidStatus.status) {
        res.status(400).json({
            message: 'error',
            errors: userValidStatus.errors
        });
    }
    else {
        try {
            const updateduser = await User.updateOne({ _id: req.params.id }, { $set: req.body });
            res.status(201).json({ message: 'success' });
        } catch (error) {
            res.status(400).json({ message: 'error', errors: [error.message] });
        }
    }
}

const deleteUser = async (req, res) => {
    try {
        const deleteduser = await User.deleteOne({ _id: req.params.id });
        res.status(200).json(deleteduser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getUsers,
    getUserById,
    saveUser,
    updateUser,
    deleteUser
}