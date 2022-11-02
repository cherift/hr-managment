const mongoose = require('mongoose');

const Document = require('./Document');
const Money = require('./Money');
const Contact = require('./Contact');
const Employee = require('./Employee');

const CompanySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    capital: {
        type: Money
    },
    registration: {
        type: String,
        required: true,
        unique: true
    },
    logo: {
        type: String
    },
    pdg: {
        type: Employee.schema,
        required: true
    },
    documents: {
        type: [Document.schema]
    },
    contact: {
        type: Contact.schema
    },
    creatingDate: {
        type: Date
    },
    teams: {
        type: [Team.schema]
    },
    departments: {
        type: [Department.schema]
    },
    employees: {
        type: [Employee.schema]
    }
});

module.exports = mongoose.model('Company', CompanySchema);