const mongoose = require('mongoose');

const MeetingSchema = new mongoose.Schema({
    notification: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Notification',
        trim: true
    },
    village: {
        type: String,
        required: true,
        trim: true
    },
    officerDetails: {
        officerName: {
            type: String,
            required: true,
            trim: true,
        },
        mobileNo: {
            type: String, 
            // required: true,
        },
        post: {
            type: String,
            required: true,
            trim: true,
        }
    },
    PersonDetails: {
        PersonName: {
            type: String,
            trim: true,
        },
        mobileNo: {
            type: String, 
            // required: true,
        },
        Demand: {
            type: String,
            trim: true,
        }
    },
}, { timestamps: true });

const Meeting = mongoose.model('Meeting', MeetingSchema);

module.exports = Meeting;
