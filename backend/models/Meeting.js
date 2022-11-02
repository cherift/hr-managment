const mongoose = require('mongoose');

const Event = require('./Event');

const MeetingSchema = new mongoose.Schema({
    event: {
        type: Event.schema
    },
    link: {
        type: String
    },
    place: {
        type: String
    },
    responsible: {
        type: Employee,
        required: true
    },
    members: {
        type: [Employee]
    }
});

module.exports = mongoose.model('Meeting', MeetingSchema);