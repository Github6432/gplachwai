const visitorModel = require('../models/visitorModel');

const visitorController = async (req, res) => {
    const { name, guardianName, relation, mobileNo, adharNo, reasonForVisit } = req.body;
    try {
        // Validation
        if (!name) return res.status(400).send({ message: 'Notification is Required' });
        if (!guardianName) return res.status(400).send({ message: 'GuardianName Details are Required' });
        if (!relation) return res.status(400).send({ message: 'Relation is Required' });
        if (!mobileNo) return res.status(400).send({ message: 'MobileNo is Required' });
        if (!adharNo) return res.status(400).send({ message: 'Adha rNo is Required' });
        if (!reasonForVisit) return res.status(400).send({ message: 'Reason For Visit is Required' });

        const visitor = new visitorModel({ name, guardianName, relation, mobileNo, adharNo, reasonForVisit  });
        await visitor.save();

        res.status(201).send({ success: true, message: 'Visitor Details Saved Successfully', visitor });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send({ success: false, message: 'Error in Saving Visiting Details', error });
    }
};

module.exports = { visitorController };
