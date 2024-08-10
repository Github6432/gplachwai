const notificationModel = require('../models/notificationModel');

const notificationController = async (req, res) => {
    const { villageName, notificationMessage, Remark } = req.body;
    try {
        // Validation
        if (!villageName) return res.status(400).send({ message: 'Village is Required' });
        if (!notificationMessage) return res.status(400).send({ message: 'Notification is Required' });

        const notification = new notificationModel({ villageName, notificationMessage, Remark });
        await notification.save();

        res.status(201).send({ success: true, message: 'notification Details Saved Successfully', notification });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send({ success: false, message: 'Error in Saving Meeting Details', error });
    }
};


const getNotificationController = async (req, res) => {
    try {
        const notifications = await notificationModel.find({});

        res.status(200).send({ success: true, message: 'notification Details Saved Successfully', notifications });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).send({ success: false, message: 'Error in Saving Meeting Details', error });
    }
};

module.exports = { notificationController, getNotificationController };
