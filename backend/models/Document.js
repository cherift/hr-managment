const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
    type: {
        type: String,
    },
    name: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    size: {
        type: String,
    }
});

module.exports = mongoose.model('Document', DocumentSchema);