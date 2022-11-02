const mongoose = require('mongoose');

const Employee = require('./Employee');

const DepartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    manager: {
        type: Employee.schema,
        required: true
    },
    members: {
        type: [Employee]
    }
});

module.exports = mongoose.model('Department', DepartmentSchema);