require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { connectDB, Product } = require('./database.js'); 

const app = express();
app.use(cors());
app.use(express.json());

// Watchdog Route
app.get('/', (req, res) => res.status(200).send('API is Online'));

// Main products route
app.get('/api/products', async (req, res) => {
  try {
    await connectDB();
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

// Single product route
app.get('/api/products/:id', async (req, res) => {
  try {
    await connectDB();
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Not found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  console.log("Connected to MongoDB Atlas");
  app.listen(PORT, () => console.log(`API Server running on port ${PORT}`));
}).catch(err => console.error("DB Connection Failed", err));
