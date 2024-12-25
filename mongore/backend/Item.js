const mongoose = require('mongoose');

const salesSchema = new mongoose.Schema({
    name: { type: String, required: true },  // Correctly using required: true
    desc: { type: String, required: true }, // Correctly using required: true
    year: { type: Number, required: true } // Correctly using required: true
});

const salesModel = mongoose.model('salescol', salesSchema);

module.exports = salesModel;
