const mongoose = require('mongoose');

const Contact = require('./Contact');
const CalendarModel = require('./Calendar')
const Document = require('./Document')

const EmployeeSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    nationality: {
        type: String,
        required: true
    },
    contact: {
        type: Contact.schema
    },
    gender: {
        type: String,
        enum: {
            valuees: ['M', 'F'],
            message: '{VALUE} is not supported'
        },
        required: true
    },
    role: {
        type: String,
        required: true
    },
    permission: {
        type: String,
        required: true,
        enum: {
            valuees: ['ADMIN', 'EMPLOYEE', 'MANAGER'],
            message: '{VALUE} is not supported'
        },
        default: 'EMPLOYEE',
    },
    birthday: {
        type: Date,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
    },
    contratType: {
        type: String,
        enum: {
            valuees: ['CDI', 'CDD', 'INTERIM', 'OTHERS'],
            message: '{VALUE} is not supported'
        },
        required: true
    },
    remainingLeaves : {
        type: number,
        default: 0
    },
    calendar: {
        type: CalendarModel.schema
    },
    documents: {
        type: [Document.schema]
    }
});

module.exports = mongoose.model('Employee', EmployeeSchema);