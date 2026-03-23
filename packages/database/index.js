const mongoose = require('mongoose');

// Utility function to connect to DB
const connectDB = async (uri) => {
  if (mongoose.connection.readyState >= 1) return;
  return mongoose.connect(uri || process.env.MONGO_URI);
};

module.exports = {
  connectDB,
  User: require('./models/User'),
  Product: require('./models/Product'),
  Order: require('./models/Order'),
  Drop: require('./models/Drop')
};
