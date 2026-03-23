const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true, min: 1 },
    selectedSize: { type: String, enum: ['S', 'M', 'L', 'XL'], required: true }
  }],
  totalPrice: { type: Number, required: true },
  paymentStatus: { type: String, enum: ['Pending', 'Paid', 'Failed', 'Refunded'], default: 'Pending' },
  orderTrackingSteps: [{
    status: { type: String }, // e.g. "Order Placed", "Shipped"
    date: { type: Date, default: Date.now },
    notes: { type: String }
  }]
}, { timestamps: true });

module.exports = mongoose.models.Order || mongoose.model('Order', OrderSchema);
