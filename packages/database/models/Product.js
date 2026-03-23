const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discountedPrice: { type: Number },
  animeSeries: { type: String, required: true },
  rarity: { type: String, enum: ['Common', 'Rare', 'Epic', 'Legendary', 'Limited Edition'], default: 'Common' },
  stock: {
    S: { type: Number, default: 0 },
    M: { type: Number, default: 0 },
    L: { type: Number, default: 0 },
    XL: { type: Number, default: 0 }
  },
  images: [{ type: String }],
  designNotes: { type: String }
}, { timestamps: true });

module.exports = mongoose.models.Product || mongoose.model('Product', ProductSchema);
