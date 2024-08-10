const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    guardianName: {
        type: String,
        required: true,
        trim: true
    },
    relation: {
        type: String,
        required: true,
        trim: true
    },
    mobileNo: {
        type: String, 
        required: true,
        trim: true
    },
    adharNo: {
        type: String,
        required: true,
        trim: true,
        unique: true 
    },
    reasonForVisit: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true });

const Visitor = mongoose.model('Visitor', VisitorSchema);

module.exports = Visitor;
