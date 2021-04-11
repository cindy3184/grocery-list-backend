const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    item: String,
}, { timestamps: true });

module.exports = mongoose.model('Item', itemSchema);