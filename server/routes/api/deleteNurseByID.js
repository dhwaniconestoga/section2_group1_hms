

module.exports = (req, res) => {
    nurseID = req.params.id
    res.json({
        message: 'Nurse deleted successfully'
    });
       
}