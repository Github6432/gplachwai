const mongoose = require('mongoose');

const handpumpSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    place: {
        type: String,
        required: true,
        trim: true,
    },
    condition: {
        type: String,
        required: true,
        trim: true
    },
    waterCondition: {
        type: String,
        required: true,
        trim: true
    },
    village: {
        type: String,
        required: true,
        trim: true
    },
}, { timestamps: true });

const Handpump = mongoose.model('Handpump', handpumpSchema);

module.exports = Handpump;
