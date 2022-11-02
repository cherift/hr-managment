const mongoose = require('mongoose');

const MoneySchema = new mongoose.Schema({
    value: {
        type: number,
        required: true
    },
    currency: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Money', MoneySchema);