const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  addresses: [{
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  }],
  favoriteAnimes: [{ type: String }],
  otakuLevel: { type: String, enum: ['Beginner', 'Weeb', 'Otaku', 'Master'], default: 'Beginner' },
}, { timestamps: true });

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);
