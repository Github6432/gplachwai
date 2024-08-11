const mongoose = require('mongoose');

const OfficeStatusSchema = new mongoose.Schema({
    officeStatus: {
        type: String,
        required: true,
        trim: true
    },
}, { timestamps: true });

const OfficeStatus = mongoose.model('OfficeStatus', OfficeStatusSchema);

module.exports = OfficeStatus;
