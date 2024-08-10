const meetingModel = require('../models/meetingModel');

const meetingController = async (req, res) => {
    const { notification, officerDetails, PersonDetails, village } = req.body;
    try {
        // Validation
        if (!notification) return res.status(400).send({ message: 'Notification is Required' });
        if (!officerDetails) return res.status(400).send({ message: 'Officer Details are Required' });
        if (!village) return res.status(400).send({ message: 'Village is Required' });

        const meeting = new meetingModel({ notification, officerDetails, PersonDetails, village });
        await meeting.save();

        res.status(201).send({ success: true, message: 'Meeting Details Saved Successfully', meeting });
    } catch (error) {
        console.error(error); 
        res.status(500).send({ success: false, message: 'Error in Saving Meeting Details', error });
    }
};

module.exports = { meetingController };
