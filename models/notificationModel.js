const mongoose = require('mongoose');

const NotificationSchema = new mongoose.Schema({
    villageName: {
        type: String,
        required: true,
        trim: true,
    },
    notificationMessage: {
        type: String,
        required: true,
        trim: true,
    },
    Remark: {
        type: String,
        trim: true,
    },

}, { timestamps: true });

module.exports = mongoose.model('Notification', NotificationSchema);
