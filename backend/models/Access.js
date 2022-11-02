const mongoose = require('mongoose');

const Employee = require('./Employee');

const AccessSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        match: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character']
    },
    isValid: {
        type: String,
        default: false
    },
    employe: {
        type: Employee.schema
    }
});

module.exports = mongoose.model("Access", AccessSchema);