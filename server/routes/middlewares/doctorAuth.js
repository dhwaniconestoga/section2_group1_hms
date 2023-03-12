const jwt = require("jsonwebtoken");


function doctorAuth(req, res, next) {
    
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    jwt.verify(token, process.env.SECRET_KEY, (err, payload) => {
        if (err) {
          return res.status(401).json({ message: 'Unauthorized' });
        }
        console.log("adminAuth ",payload);
        if(payload.userType == "Doctor"){
            next();
        }
        else{
            return res.status(401).json({ message: 'Unauthorized' });
        }
      });

}

module.exports = doctorAuth;
