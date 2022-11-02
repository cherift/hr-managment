const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    address: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, 'Please enter a valid email']
    },
    phone: {
        type: String
    },
    site: {
        type: String,
        lowercase: true,
        match: [/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/, 'Please enter a valid url']
    }
});

module.exports = mongoose.model('Contact', ContactSchema);