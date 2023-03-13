const User = require("../models/user.js");

const getUserCountByRole = async (req, res) => {
    // console.log("api hit")
    try {
        var userType = req.body.userType;
        // console.log(req.body);
        let users = [];
        if(userType){
            users = await User.find({"userType":userType});
            res.json({ 'count':users.length});
        }
        else{
            res.status(400).json({ errors: ["User type is missing in body"]})
        }
        
    } catch (error) {
        res.status(500).json({ errors: [error.message ]});
    }
}



module.exports = {
    getUserCountByRole
}