
module.exports = (req, res) => {
    const { firstName, lastName, ward, email } = req.body;

    res.json({
        message: 'Nurse updated successfully'
    });

}