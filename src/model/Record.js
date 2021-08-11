const mongoose = require('mongoose');

const recordSchema = new mongoose.Schema({
    _id: { type: String },
    key: { type: String },
    createdAt: { type: Date },
    counts: {
        min: { type: Number, min: 0 },
        max: { type: Number, min: 0 }
    }
});
const Record = mongoose.model('Record', recordSchema);

module.exports = Record;
