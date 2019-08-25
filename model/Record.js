const mongoose = require('mongoose');

const recordSchema = mongoose.Schema({
    _id: {
        type: String
    },
    key: {
        type: String
    },
    createdAt: {
        type: Date
    },
    counts: {
        type: [Number]
    },
    value: {
        type: String
    }
});

const Record = mongoose.model('record', recordSchema);

module.exports = Record;