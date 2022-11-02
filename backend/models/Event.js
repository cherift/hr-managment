const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    category: {
        type: String,
        enum: {
            values: ['TODO', 'URGENT', 'INFO'],
            message: '{VALUE} is not proposed'
        }
    }
});

module.exports = mongoose.model('Event', EventSchema);