
module.exports = (req,res) => {
    nurseID = req.params.id
    res.json({
        message: 'Nurse fetched successfully',
        nurse: {
            "test":"test"
        }
    });
}