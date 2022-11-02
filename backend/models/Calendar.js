const mongoose = require('mongoose');

const Meeting = require('./Meeting');
const Event = require('./Event');
const TimeOff = require('./TimeOff');

const CalendarSchema = new mongoose.Schema({
    meetings: {
        type: [Meeting.schema]
    },
    timeOffs: {
        type: [TimeOff.schema]
    },
    events: {
        type: [Event.schema]
    }
});

module.exports = mongoose.model('CalendarModel', CalendarSchema);