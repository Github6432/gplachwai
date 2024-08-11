const officeStatusModel = require('../models/officeStatusModel');

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

        const visitor = new officeStatusModel({ name, guardianName, relation, mobileNo, adharNo, reasonForVisit });
        await visitor.save();

        res.status(201).send({ success: true, message: 'Visitor Details Saved Successfully', visitor });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send({ success: false, message: 'Error in Saving Visiting Details', error });
    }
};


const officeStatusController = async (req, res) => {
    const { officeStatus } = req.body;
    try {
        // Validation
        if (!officeStatus) return res.status(400).send({ message: 'Office Status is Required' });

        const status = new officeStatusModel({ officeStatus });
        await status.save();

        res.status(201).send({ success: true, message: 'Office Status Saved Successfully', status });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send({ success: false, message: 'Error in Saving Office Status', error });
    }
};


const getofficeStatusController = async (req, res) => {
    try {
        const statusData = await officeStatusModel.findOne({});
        if (!statusData) {
            return res.status(400).send({ message: 'Office Status Not Found' });
        }
        res.status(200).send({ success: true, message: 'Office Status Retrieved Successfully', statusData });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send({ success: false, message: 'Error in Retrieving Office Status', error });
    }
};



const editofficeStatusController = async (req, res) => {
    try {
        //get status
        const statusData = await officeStatusModel.findOne({});
        staData = statusData.officeStatus;

        // Validation
        if (!staData) return res.status(400).send({ message: 'Office Status is Required' });

        const officeStatusData = await officeStatusModel.findOne({});
        officeStatusData.officeStatus = staData === 'OPEN' ? 'CLOSE' : 'OPEN';
        await officeStatusData.save();

        res.status(201).send({ success: true, message: 'Office Status Updated Successfully', officeStatusData });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send({ success: false, message: 'Error in Update Office Status', error });
    }
};

module.exports = { visitorController, officeStatusController, editofficeStatusController, getofficeStatusController };
