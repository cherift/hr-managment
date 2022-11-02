const mongoose = require('mongoose');

const LeaveDate = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },
    moment: {
        type: String, 
        enum: {
            values: ['MORNING', 'EVENING'],
            message: '{VALUE} is not supported'
        },
        required: true
    }
});

const TimeOffSchema = new mongoose.Schema({
    type: {
        type: String,
        enum: {
            values: ['WORKFROMHOME', 'SICK', 'RTT', 'CP', 'OTHERS'],
            message: '{VALUE} is not supported'
        }
    },
    from: {
        type: LeaveDate,
        required: true
    },
    to: {
        type: LeaveDate,
        required: true
    },
    reaseon: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: {
            values: ['PENDING', 'ACCEPTED', 'CANCELLED', 'REFUSED'],
            message: '{VALUE} is not supported'
        }
    }
});

module.exports = mongoose.model('TimeOff', TimeOffSchema);