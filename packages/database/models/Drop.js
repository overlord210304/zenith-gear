const mongoose = require('mongoose');

const DropSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  bannerImage: { type: String }
}, { timestamps: true });

module.exports = mongoose.models.Drop || mongoose.model('Drop', DropSchema);
