const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  name: String,
  value: Number,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Data', dataSchema);