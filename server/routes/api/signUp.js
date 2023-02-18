
module.exports =  (req,res) => {
    newUser = req.body;
    if(!true){
        console.log(req.body)
        res.json({
            message: 'success',
            request: req.body
        })
    }
    else{
        console.log("error signing up ")
        res.json({
            message: 'error',
            errors: [
                "error1",
                "error2"
            ]
        })
    }
    
}