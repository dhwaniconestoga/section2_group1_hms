
module.exports =  (req,res) => {
    
    res.json({
        message: 'Nurses fetched successfully',
        nurses: {
            "test":"test"
        }
    })
}